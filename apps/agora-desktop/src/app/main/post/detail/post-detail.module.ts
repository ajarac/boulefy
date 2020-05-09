import { NgModule } from '@angular/core'
import { PostDetailComponent } from '@agora-desktop/main/post/detail/post-detail.component'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { PostDetailRoutingModule } from '@agora-desktop/main/post/detail/post-detail-routing.module'
import { PostDetailGuard } from '@agora-desktop/main/post/detail/guards/post-detail.guard'
import { WriteCommentComponent } from '@agora-desktop/main/post/detail/components/write-comment/write-comment.component'
import { PostItemComponent } from '@agora-desktop/main/post/detail/components/post-item/post-item.component'
import { CommentItemComponent } from '@agora-desktop/main/post/detail/components/comment-item/comment-item.component'

@NgModule({
    imports: [SharedModule, PostDetailRoutingModule],
    declarations: [PostDetailComponent, CommentItemComponent, WriteCommentComponent, PostItemComponent],
    providers: [PostDetailGuard]
})
export class PostDetailModule {}
