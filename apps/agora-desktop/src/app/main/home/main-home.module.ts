import { NgModule } from '@angular/core'
import { HomeRoutingModule } from '@agora-desktop/main/home/home-routing.module'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { PostItemComponent } from '@agora-desktop/main/home/components/post-item/post-item.component'
import { HomeComponent } from '@agora-desktop/main/home/home.component'
import { PostListGuard } from '@agora-desktop/main/home/guards/post-list.guard'

@NgModule({
    imports: [SharedModule, HomeRoutingModule],
    declarations: [HomeComponent, PostItemComponent],
    providers: [PostListGuard]
})
export class MainHomeModule {}
