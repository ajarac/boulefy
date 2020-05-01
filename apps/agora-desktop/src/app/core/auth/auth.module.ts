import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { AuthService } from '@agora-desktop/core/auth/services/auth.service'
import { AuthRouteState } from '@agora-desktop/core/auth/store/auth/auth-route.state'

@NgModule({
    imports: [NgxsModule.forFeature([AuthState, AuthRouteState])],
    providers: [AuthService]
})
export class AuthModule {}
