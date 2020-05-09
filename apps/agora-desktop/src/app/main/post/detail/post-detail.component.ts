import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
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

    @Select(CommentState.getList) comments$: Observable<CommentResponse[]>
    @Select(CommentState.isEnd) isEnd$: Observable<boolean>

    @Dispatch() next = (): Observable<LoadCommentsNextPage> =>
        this.isEnd$.pipe(
            filter((isEnd: boolean) => !isEnd),
            map(() => new LoadCommentsNextPage())
        )
}
