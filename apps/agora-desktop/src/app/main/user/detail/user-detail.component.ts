import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { UserDetailState } from '@agora-desktop/core/users/detail/store/user-detail.state'
import { Observable } from 'rxjs'
import { UserResponse } from '@shared/models/user/user.response'

@Component({
    selector: 'agora-user-detail',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['./user-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {
    @Select(UserDetailState.user) user$: Observable<UserResponse>
    @Select(UserDetailState.loading) loading$: Observable<boolean>
}
