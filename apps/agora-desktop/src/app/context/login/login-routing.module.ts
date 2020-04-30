import { RouterModule, Routes } from '@angular/router'
import { RegisterComponent } from './pages/register/register.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
