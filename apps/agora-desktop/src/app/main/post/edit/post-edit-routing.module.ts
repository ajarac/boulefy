import { RouterModule, Routes } from '@angular/router'
import { PostEditComponent } from '@agora-desktop/main/post/edit/post-edit.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
    {
        path: '',
        component: PostEditComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostEditRoutingModule {}
