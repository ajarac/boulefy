import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: ':id',
        loadChildren: () => import('./detail/user-detail.module').then((m) => m.UserDetailModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRouterModule {}
