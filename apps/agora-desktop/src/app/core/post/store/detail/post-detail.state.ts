import { Action, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { LoadPostById, PostByIdLoaded } from '@agora-desktop/core/post/store/post.action'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { PostResponse } from '@shared/models/post/post.response'

@State<PostResponse>({
    name: 'postDetail',
    defaults: null
})
@Injectable()
export class PostDetailState {
    constructor(private postService: PostService) {}

    @Action(LoadPostById)
    loadById({ dispatch }: StateContext<PostResponse>, { id }: LoadPostById): Observable<PostResponse> {
        return this.postService.getPostById(id).pipe(tap((post: PostResponse) => dispatch(new PostByIdLoaded(post))))
    }

    @Action(PostByIdLoaded)
    postByIdLoaded({ setState }: StateContext<PostResponse>, { post }: PostByIdLoaded): void {
        setState(post)
    }
}
