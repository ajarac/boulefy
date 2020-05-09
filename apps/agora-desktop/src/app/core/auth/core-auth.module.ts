import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'
import { AuthService } from '@agora-desktop/core/auth/services/auth.service'
import { ProfileState } from '@agora-desktop/core/auth/store/profile/profile.state'
import { ProfileService } from '@agora-desktop/core/auth/services/profile.service'

@NgModule({
    imports: [NgxsModule.forFeature([AuthState, ProfileState])],
    providers: [AuthService, ProfileService]
})
export class CoreAuthModule {}
