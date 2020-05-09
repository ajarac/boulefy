import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostListState } from '@agora-desktop/core/post/store/list/post-list.state'
import { PostResponse } from '@shared/models/post/post.response'
import { LoadPostsNextPage } from '@agora-desktop/core/post/store/post.action'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'

@Component({
    selector: 'agora-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    @Select(PostListState.getList) posts$: Observable<PostResponse[]>
    @Select(PostListState.loading) loading$: Observable<boolean>

    @Dispatch() next = (): LoadPostsNextPage => new LoadPostsNextPage()
}
