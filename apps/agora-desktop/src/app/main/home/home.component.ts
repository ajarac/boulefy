import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostListState } from '@agora-desktop/core/post/store/list/post-list.state'
import { PostResponse } from '@shared/models/post/post.response'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import { LoadPostsNextPage } from '@agora-desktop/core/post/store/post.action'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'agora-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    @ViewChild(CdkVirtualScrollViewport, { static: true })
    viewport: CdkVirtualScrollViewport

    @Select(PostListState.getList) posts$: Observable<PostResponse[]>

    @Select(PostListState.isEnd) isEnd$: Observable<boolean>

    next(): void {
        const end: number = this.viewport.getRenderedRange().end
        const total: number = this.viewport.getDataLength()
        if (total > 0 && end === total ) {
            this.nextPage()
        }
    }

    @Dispatch() nextPage = (): Observable<LoadPostsNextPage> =>
        this.isEnd$.pipe(
            filter((isEnd: boolean) => !isEnd),
            map(() => new LoadPostsNextPage())
        )
}
