import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service'

@Component({
    selector: 'agora-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    profile: NbMenuItem[] = [
        {
            title: 'Register',
            url: '/login/register'
        },
        {
            title: 'Sign In',
            url: '/login/sign-inf'
        }
    ]
}
