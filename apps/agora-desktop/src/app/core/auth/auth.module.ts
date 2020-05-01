import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { AuthService } from '@agora-desktop/core/auth/services/auth.service'

@NgModule({
    imports: [NgxsModule.forFeature([AuthState])],
    providers: [AuthService]
})
export class AuthModule {}
