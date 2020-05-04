import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostDetailState } from '@agora-desktop/core/post/store/post-detail.state'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { FormControl, Validators } from '@angular/forms'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { CreateComment } from '@agora-desktop/core/post/store/comment.action'
import { PostResponse } from '@shared/models/post/post.response'
import { CommentResponse } from '@shared/models/comment/comment.response'

@Component({
    selector: 'agora-post',
    templateUrl: 'post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent {
    @Select(PostDetailState.getPost) post$: Observable<PostResponse>
    @Select(PostDetailState.getComments) comments$: Observable<CommentResponse[]>
    @Select(AuthState.isLogged) isLogged$: Observable<boolean>

    commentControl: FormControl = new FormControl('', Validators.min(5))

    @Dispatch() createComment = (): CreateComment => new CreateComment(this.commentControl.value)
}
