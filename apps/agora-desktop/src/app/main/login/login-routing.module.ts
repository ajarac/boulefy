import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then((m) => m.SignInModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
