import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostState } from '@agora-desktop/core/post/store/post.state'
import { Post } from '@agora-desktop/core/post/models/post'
import { PostListState } from '@agora-desktop/core/post/store/post-list.state'

@Component({
    selector: 'agora-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    @Select(PostListState) posts$: Observable<Post[]>
}
