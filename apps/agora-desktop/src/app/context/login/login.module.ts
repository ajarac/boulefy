import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared/shared.module'

import { RegisterComponent } from './pages/register/register.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { LoginRoutingModule } from './login-routing.module'

@NgModule({
    imports: [SharedModule, LoginRoutingModule],
    declarations: [RegisterComponent, SignInComponent]
})
export class LoginModule {}
