import { NgModule } from '@angular/core'
import { PostDetailComponent } from '@agora-desktop/main/post/detail/post-detail.component'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { PostDetailRoutingModule } from '@agora-desktop/main/post/detail/post-detail-routing.module'

@NgModule({
    imports: [SharedModule, PostDetailRoutingModule],
    declarations: [PostDetailComponent]
})
export class PostDetailModule {}
