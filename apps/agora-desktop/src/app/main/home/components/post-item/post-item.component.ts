import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { PostResponse } from '@shared/models/post/post.response'

@Component({
    selector: 'agora-post-item',
    templateUrl: 'post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
    @Input() post: PostResponse
}
