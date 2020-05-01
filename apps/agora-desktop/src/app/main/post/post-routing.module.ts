import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
    {
        path: 'new',
        loadChildren: () => import('./edit/post-edit.module').then((m) => m.PostEditModule)
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                loadChildren: () => import('./detail/post-detail.module').then((m) => m.PostDetailModule)
            },
            {
                path: 'edit',
                loadChildren: () => import('./edit/post-edit.module').then((m) => m.PostEditModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {}
