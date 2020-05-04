import { Action, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { LoadPosts, PostsLoaded } from '@agora-desktop/core/post/store/post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostResponse } from '@shared/models/post/post.response'

type IPostListState = PostResponse[]

@State<IPostListState>({
    name: 'postList',
    defaults: []
})
@Injectable()
export class PostListState {
    constructor(private service: PostService) {}

    @Action(LoadPosts)
    load({ dispatch }): Observable<IPostListState> {
        return this.service.getPosts().pipe(tap((posts: PostResponse[]) => dispatch(new PostsLoaded(posts))))
    }

    @Action(PostsLoaded)
    loaded({ setState }: StateContext<IPostListState>, { posts }: PostsLoaded): void {
        setState(posts)
    }
}
