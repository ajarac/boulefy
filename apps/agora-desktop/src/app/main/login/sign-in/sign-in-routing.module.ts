import { RouterModule, Routes } from '@angular/router'
import { SignInComponent } from '@agora-desktop/main/login/sign-in/sign-in.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignInRoutingModule {}
