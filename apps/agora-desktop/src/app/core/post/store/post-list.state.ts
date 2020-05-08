import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { LoadPostNextPage, LoadPosts, PostsLoaded } from '@agora-desktop/core/post/store/post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostResponse } from '@shared/models/post/post.response'
import { append, patch } from '@ngxs/store/operators'

interface IPostListState {
    list: PostResponse[]
    page: number
}

@State<IPostListState>({
    name: 'postList',
    defaults: {
        list: [],
        page: 1
    }
})
@Injectable()
export class PostListState {
    constructor(private service: PostService) {}

    @Selector()
    static getList({ list }: IPostListState): PostResponse[] {
        return list
    }

    @Action(LoadPosts)
    load({ dispatch, setState }: StateContext<IPostListState>): Observable<PostResponse[]> {
        setState(
            patch<IPostListState>({ list: [], page: 1 })
        )
        return this.service.getPosts(1).pipe(tap((posts: PostResponse[]) => dispatch(new PostsLoaded(posts))))
    }

    @Action(LoadPostNextPage)
    loadNextPage({ dispatch, getState, setState }: StateContext<IPostListState>): Observable<PostResponse[]> {
        const { page }: IPostListState = getState()
        setState(
            patch<IPostListState>({ page: page + 1 })
        )
        return this.service.getPosts(page + 1).pipe(tap((posts: PostResponse[]) => dispatch(new PostsLoaded(posts))))
    }

    @Action(PostsLoaded)
    loaded({ setState }: StateContext<IPostListState>, { posts }: PostsLoaded): void {
        setState(
            patch<IPostListState>({ list: append<PostResponse>(posts) })
        )
    }
}
