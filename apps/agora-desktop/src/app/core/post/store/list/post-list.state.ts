import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { LoadInitPosts, LoadPosts, LoadPostsNextPage, PostsLoaded, SetPostSearch } from '@agora-desktop/core/post/store/post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostResponse } from '@shared/models/post/post.response'
import { append, patch } from '@ngxs/store/operators'
import { Pagination } from '@shared/models/pagination/pagination'
import { ListQuery } from '@agora-desktop/core/shared/models/list-query'

interface IPostListState {
    list: PostResponse[]
    page: number
    total: number
    search: string
}

@State<IPostListState>({
    name: 'postList',
    defaults: {
        list: [],
        page: 1,
        total: 0,
        search: null
    }
})
@Injectable()
export class PostListState {
    constructor(private service: PostService) {}

    @Selector()
    static getList({ list }: IPostListState): PostResponse[] {
        return list
    }

    @Selector()
    static getPage({ page }: IPostListState): number {
        return page
    }

    @Selector()
    static getTotal({ total }: IPostListState): number {
        return total
    }

    @Selector()
    static isEnd({ total, list }: IPostListState): boolean {
        return total === list.length
    }

    @Action(LoadPosts)
    load({ dispatch }: StateContext<IPostListState>, { query }: LoadPosts): Observable<Pagination<PostResponse>> {
        return this.service.getPosts(query).pipe(tap((pagination: Pagination<PostResponse>) => dispatch(new PostsLoaded(pagination))))
    }

    @Action(LoadInitPosts)
    init({ dispatch, patchState }: StateContext<IPostListState>): void {
        const query: ListQuery = new ListQuery({ page: 1, search: '' })
        patchState({ list: [] })
        dispatch(new LoadPosts(query))
    }

    @Action(LoadPostsNextPage)
    loadNextPage({ dispatch, getState }: StateContext<IPostListState>): void {
        const { page, search }: IPostListState = getState()
        const query: ListQuery = new ListQuery({ page: page + 1, search })
        dispatch(new LoadPosts(query))
    }

    @Action(SetPostSearch)
    search({ patchState, dispatch }: StateContext<IPostListState>, { search }: SetPostSearch): void {
        patchState({ search })
        const query: ListQuery = new ListQuery({ page: 1, search })
        dispatch(new LoadPosts(query))
    }

    @Action(PostsLoaded)
    loaded({ setState }: StateContext<IPostListState>, { pagination: { results, metadata } }: PostsLoaded): void {
        setState(
            patch<IPostListState>({ list: append<PostResponse>(results), page: metadata.page, total: metadata.total })
        )
    }
}
