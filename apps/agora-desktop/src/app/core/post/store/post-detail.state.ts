import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Post } from '@agora-desktop/core/post/models/post'
import { Injectable } from '@angular/core'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { LoadPostById, PostByIdLoaded } from '@agora-desktop/core/post/store/post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { patch } from '@ngxs/store/operators'

interface IPostDetailState {
    post: Post
    comments: any[]
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

    constructor(private postService: PostService) {}

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
}
