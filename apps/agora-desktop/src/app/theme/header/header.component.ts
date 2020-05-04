import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { Observable } from 'rxjs'
import { ProfileState } from '@agora-desktop/core/auth/store/profile/profile.state'
import { UserResponse } from '@shared/models/user/user.response'

@Component({
    selector: 'agora-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    @Select(AuthState.isLogged) isLogged$: Observable<boolean>
    @Select(ProfileState) profile$: Observable<UserResponse>
}
