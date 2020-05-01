import { NgModule } from '@angular/core'
import { SignInComponent } from '@agora-desktop/main/login/sign-in/sign-in.component'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { SignInRoutingModule } from '@agora-desktop/main/login/sign-in/sign-in-routing.module'

@NgModule({
    imports: [SharedModule, SignInRoutingModule],
    declarations: [SignInComponent]
})
export class SignInModule {}
