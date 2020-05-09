import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { CreateComment } from '@agora-desktop/core/comment/store/comment.action'

@Component({
    selector: 'agora-write-comment',
    templateUrl: 'write-comment.component.html',
    styleUrls: ['./write-comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteCommentComponent {
    commentControl: FormControl = new FormControl('', Validators.min(5))

    @Dispatch() createComment = (): CreateComment => new CreateComment(this.commentControl.value)
}
