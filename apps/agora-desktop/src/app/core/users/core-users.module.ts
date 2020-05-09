import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { TopUsersState } from '@agora-desktop/core/users/top/store/top-users.state'
import { TopUsersService } from '@agora-desktop/core/users/top/service/top-users.service'
import { UserService } from '@agora-desktop/core/users/detail/services/user.service'
import { UserDetailState } from '@agora-desktop/core/users/detail/store/user-detail.state'

@NgModule({
    imports: [NgxsModule.forFeature([TopUsersState, UserDetailState])],
    providers: [TopUsersService, UserService]
})
export class CoreUsersModule {}
