import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Post } from '@agora-desktop/core/post/models/post'
import { Injectable } from '@angular/core'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { LoadPostById, PostByIdLoaded } from '@agora-desktop/core/post/store/post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { patch } from '@ngxs/store/operators'
import { CommentCreated, CommentsByPostIdLoaded, CreateComment, LoadCommentsByPostId } from '@agora-desktop/core/post/store/comment.action'
import { Comment } from '@agora-desktop/core/post/models/comment'
import { CommentService } from '@agora-desktop/core/post/services/comment.service'

interface IPostDetailState {
    post: Post
    comments: Array<Comment>
}

@State<IPostDetailState>({
    name: 'postDetail',
    defaults: {
        post: null,
        comments: []
    }
})
@Injectable()
export class PostDetailState {
    @Selector()
    static getPost({ post }: IPostDetailState): Post {
        return post
    }

    @Selector()
    static getComments({ comments }: IPostDetailState): any[] {
        return comments
    }

    constructor(private postService: PostService, private commentService: CommentService) {}

    @Action(LoadPostById)
    loadById({ dispatch }: StateContext<IPostDetailState>, { id }: LoadPostById): Observable<Post> {
        return this.postService.getPostById(id).pipe(tap((post: Post) => dispatch(new PostByIdLoaded(post))))
    }

    @Action(PostByIdLoaded)
    postByIdLoaded({ setState }: StateContext<IPostDetailState>, { post }: PostByIdLoaded): void {
        setState(
            patch<IPostDetailState>({ post })
        )
    }

    @Action(LoadCommentsByPostId)
    loadComments({ dispatch }: StateContext<IPostDetailState>, { postId }: LoadCommentsByPostId): Observable<Comment[]> {
        return this.commentService
            .getCommentsByPostId(postId)
            .pipe(tap((comments: Comment[]) => dispatch(new CommentsByPostIdLoaded(comments))))
    }

    @Action(CommentsByPostIdLoaded)
    commentsLoaded({ setState }: StateContext<IPostDetailState>, { comments }: CommentsByPostIdLoaded): void {
        setState(
            patch<IPostDetailState>({ comments })
        )
    }

    @Action(CreateComment)
    createComment({ dispatch, getState }: StateContext<IPostDetailState>, { content }: CreateComment): Observable<string> {
        const { post }: IPostDetailState = getState()
        return this.commentService.create(content, post.id).pipe(tap((id: string) => dispatch(new CommentCreated(id))))
    }

    @Action(CommentCreated)
    commentCreated({ dispatch, getState }: StateContext<IPostDetailState>): void {
        const { post }: IPostDetailState = getState()
        dispatch(new LoadCommentsByPostId(post.id))
    }
}
