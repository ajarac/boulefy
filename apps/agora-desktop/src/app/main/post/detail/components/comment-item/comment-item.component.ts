import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommentResponse } from '@shared/models/comment/comment.response'

@Component({
    selector: 'agora-comment-item',
    templateUrl: 'comment-item.component.html',
    styleUrls: ['./comment-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentItemComponent {
    @Input() comment: CommentResponse
}
