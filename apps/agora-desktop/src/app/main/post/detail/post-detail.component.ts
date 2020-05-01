import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostDetailState } from '@agora-desktop/core/post/store/post-detail.state'
import { Post } from '@agora-desktop/core/post/models/post'

@Component({
    selector: 'agora-post',
    templateUrl: 'post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent {
    @Select(PostDetailState.getPost) post$: Observable<Post>
}
