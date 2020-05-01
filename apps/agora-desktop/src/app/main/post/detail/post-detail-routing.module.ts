import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PostDetailComponent } from '@agora-desktop/main/post/detail/post-detail.component'
import { PostDetailGuard } from '@agora-desktop/main/post/detail/guards/post-detail.guard'

const routes: Routes = [
    {
        path: '',
        component: PostDetailComponent,
        canActivate: [PostDetailGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostDetailRoutingModule {}
