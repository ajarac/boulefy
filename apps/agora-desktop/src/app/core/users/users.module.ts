import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { TopUsersState } from '@agora-desktop/core/users/top/store/top-users.state'
import { TopUsersService } from '@agora-desktop/core/users/top/service/top-users.service'

@NgModule({
    imports: [NgxsModule.forFeature([TopUsersState])],
    providers: [TopUsersService]
})
export class UsersModule {}
