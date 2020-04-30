import { NgModule } from '@angular/core'
import { AuthService } from './services/auth.service'
import { NgxsModule } from '@ngxs/store'
import { AuthState } from './store/auth/auth.state'

@NgModule({
    imports: [NgxsModule.forFeature([AuthState])],
    providers: [AuthService]
})
export class AuthModule {}
