import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { PostDetailState } from '@agora-desktop/core/post/store/detail/post-detail.state'
import { Observable } from 'rxjs'
import { PostResponse } from '@shared/models/post/post.response'

@Component({
    selector: 'agora-post-item',
    templateUrl: 'post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent {
    @Select(PostDetailState) post$: Observable<PostResponse>
}
