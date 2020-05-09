import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { TopUsersState } from '@agora-desktop/core/users/top/store/top-users.state'
import { Observable } from 'rxjs'
import { UserResponse } from '@shared/models/user/user.response'

@Component({
    selector: 'agora-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
    @Select(TopUsersState) topUsers$: Observable<UserResponse[]>
}
