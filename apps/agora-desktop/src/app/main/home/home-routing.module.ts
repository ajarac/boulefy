import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@agora-desktop/main/home/home.component'
import { PostListGuard } from '@agora-desktop/main/home/guards/post-list.guard'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [PostListGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
