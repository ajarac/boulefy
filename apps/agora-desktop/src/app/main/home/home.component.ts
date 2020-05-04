import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostListState } from '@agora-desktop/core/post/store/post-list.state'
import { PostResponse } from '@shared/models/post/post.response'

@Component({
    selector: 'agora-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    @Select(PostListState) posts$: Observable<PostResponse[]>
}
