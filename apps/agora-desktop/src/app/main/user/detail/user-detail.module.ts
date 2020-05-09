import { NgModule } from '@angular/core'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { UserDetailRoutingModule } from '@agora-desktop/main/user/detail/user-detail-routing.module'
import { UserDetailComponent } from '@agora-desktop/main/user/detail/user-detail.component'
import { UserDetailGuard } from '@agora-desktop/main/user/detail/guards/user-detail.guard'

@NgModule({
    imports: [SharedModule, UserDetailRoutingModule],
    declarations: [UserDetailComponent],
    providers: [UserDetailGuard]
})
export class UserDetailModule {}
