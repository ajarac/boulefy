import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostListState } from '@agora-desktop/core/post/store/post-list.state'
import { PostResponse } from '@shared/models/post/post.response'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { LoadPostNextPage } from '@agora-desktop/core/post/store/post.action'
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'

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

    next(): void {
        console.log('next')
        const end: number = this.viewport.getRenderedRange().end
        const total: number = this.viewport.getDataLength()
        console.log({ end, total })
        if(end === total) {
            this.nextPage()
        }
    }

    @Dispatch() nextPage = (): LoadPostNextPage => new LoadPostNextPage()
}
