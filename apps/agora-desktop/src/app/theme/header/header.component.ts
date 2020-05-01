import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { Observable } from 'rxjs'

@Component({
    selector: 'agora-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    @Select(AuthState.isLogged) isLogged$: Observable<boolean>
}
