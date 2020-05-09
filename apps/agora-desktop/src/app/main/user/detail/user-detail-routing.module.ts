import { RouterModule, Routes } from '@angular/router'
import { UserDetailComponent } from '@agora-desktop/main/user/detail/user-detail.component'
import { NgModule } from '@angular/core'
import { UserDetailGuard } from '@agora-desktop/main/user/detail/guards/user-detail.guard'

const routes: Routes = [
    {
        path: '',
        component: UserDetailComponent,
        canActivate: [UserDetailGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDetailRoutingModule {}
