import { NgModule } from '@angular/core'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { RegisterComponent } from '@agora-desktop/main/login/register/register.component'
import { RegisterRoutingModule } from '@agora-desktop/main/login/register/register-routing.module'

@NgModule({
    imports: [SharedModule, RegisterRoutingModule],
    declarations: [RegisterComponent]
})
export class RegisterModule {}
