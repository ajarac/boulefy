import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PostDetailComponent } from '@agora-desktop/main/post/detail/post-detail.component'

const routes: Routes = [
    {
        path: '',
        component: PostDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostDetailRoutingModule {}
