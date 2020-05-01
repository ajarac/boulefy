import { NgModule } from '@angular/core'
import { PostDetailComponent } from '@agora-desktop/main/post/detail/post-detail.component'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { PostDetailRoutingModule } from '@agora-desktop/main/post/detail/post-detail-routing.module'
import { PostDetailGuard } from '@agora-desktop/main/post/detail/guards/post-detail.guard'

@NgModule({
    imports: [SharedModule, PostDetailRoutingModule],
    declarations: [PostDetailComponent],
    providers: [PostDetailGuard]
})
export class PostDetailModule {}
