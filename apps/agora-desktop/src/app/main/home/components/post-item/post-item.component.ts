import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Post } from '@agora-desktop/core/post/models/post'

@Component({
    selector: 'agora-post-item',
    templateUrl: 'post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
    @Input() post: Post
}
