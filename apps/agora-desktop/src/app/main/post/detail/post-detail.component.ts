import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import { CommentState } from '@agora-desktop/core/comment/store/comment.state'
import { CommentResponse } from '@shared/models/comment/comment.response'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { LoadCommentsNextPage } from '@agora-desktop/core/comment/store/comment.action'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'agora-post',
    templateUrl: 'post-detail.component.html',
    styleUrls: ['./post-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailComponent {
    @Select(AuthState.isLogged) isLogged$: Observable<boolean>
    @ViewChild(CdkVirtualScrollViewport, { static: true })
    viewport: CdkVirtualScrollViewport

    @Select(CommentState.getList) comments$: Observable<CommentResponse[]>
    @Select(CommentState.isEnd) isEnd$: Observable<boolean>

    next(): void {
        const end: number = this.viewport.getRenderedRange().end
        const total: number = this.viewport.getDataLength()
        if (total > 0 && end === total) {
            this.nextPage()
        }
    }

    @Dispatch() nextPage = (): Observable<LoadCommentsNextPage> =>
        this.isEnd$.pipe(
            filter((isEnd: boolean) => !isEnd),
            map(() => new LoadCommentsNextPage())
        )
}
