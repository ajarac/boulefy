import { Action, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CreatePost, PostCreated } from '@agora-desktop/core/post/store/post.action'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostListState } from '@agora-desktop/core/post/store/post-list.state'
import { PostDetailState } from '@agora-desktop/core/post/store/post-detail.state'

@State<void>({
    name: 'post',
    children: [PostListState, PostDetailState]
})
@Injectable()
export class PostState {
    constructor(private service: PostService) {}

    @Action(CreatePost)
    create({ dispatch }: StateContext<void>, { title, content }: CreatePost): Observable<string> {
        return this.service.create(title, content).pipe(tap((postId: string) => dispatch(new PostCreated(postId))))
    }
}
