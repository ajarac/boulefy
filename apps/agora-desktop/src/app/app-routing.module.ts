import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/home/main-home.module').then((m) => m.MainHomeModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./main/login/main-login.module').then((m) => m.MainLoginModule)
    },
    {
        path: 'post',
        loadChildren: () => import('./main/post/main-post.module').then((m) => m.MainPostModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./main/user/user.module').then((m) => m.UserModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
