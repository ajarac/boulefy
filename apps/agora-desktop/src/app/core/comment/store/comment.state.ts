import { Action, Selector, State, StateContext } from '@ngxs/store'
import { CommentResponse } from '@shared/models/comment/comment.response'
import { Injectable } from '@angular/core'
import {
    CommentCreated,
    CommentsLoaded,
    CreateComment,
    LoadComments,
    LoadCommentsNextPage,
    LoadInitCommentsByPostId
} from '@agora-desktop/core/comment/store/comment.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CommentService } from '@agora-desktop/core/comment/services/comment.service'
import { Pagination } from '@shared/models/pagination/pagination'
import { append, patch } from '@ngxs/store/operators'

interface ICommentState {
    postId: string
    list: Array<CommentResponse>
    page: number
    total: number
}

@State<ICommentState>({
    name: 'comments',
    defaults: {
        postId: null,
        list: [],
        page: 1,
        total: null
    }
})
@Injectable()
export class CommentState {
    constructor(private service: CommentService) {}

    @Selector()
    static getList({ list }: ICommentState): Array<CommentResponse> {
        return list
    }

    @Selector()
    static isEnd({ total, list }: ICommentState): boolean {
        return total === list.length
    }

    @Action(LoadInitCommentsByPostId)
    loadInit({ dispatch, patchState }: StateContext<ICommentState>, { postId }: LoadInitCommentsByPostId): void {
        patchState({ postId, list: [] })
        dispatch(new LoadComments())
    }

    @Action(LoadComments)
    loadComments({ dispatch, getState }: StateContext<ICommentState>): Observable<Pagination<CommentResponse>> {
        const { page, postId }: ICommentState = getState()
        return this.service
            .getCommentsByPostId(postId, page)
            .pipe(tap((pagination: Pagination<CommentResponse>) => dispatch(new CommentsLoaded(pagination))))
    }

    @Action(LoadCommentsNextPage)
    loadNextPage({ dispatch, getState, patchState }: StateContext<ICommentState>): void {
        const { page }: ICommentState = getState()
        patchState({ page: page + 1 })
        dispatch(new LoadComments())
    }

    @Action(CommentsLoaded)
    commentsLoaded({ setState }: StateContext<ICommentState>, { pagination: { metadata, results } }: CommentsLoaded): void {
        setState(
            patch<ICommentState>({ list: append<CommentResponse>(results), page: metadata.page, total: metadata.total })
        )
    }

    @Action(CreateComment)
    createComment({ dispatch, getState }: StateContext<ICommentState>, { content }: CreateComment): Observable<string> {
        const { postId }: ICommentState = getState()
        return this.service.create(content, postId).pipe(tap(() => dispatch(new CommentCreated())))
    }

    @Action(CommentCreated)
    commentCreated({ dispatch, getState }: StateContext<ICommentState>): void {
        const { postId }: ICommentState = getState()
        dispatch(new LoadInitCommentsByPostId(postId))
    }
}
