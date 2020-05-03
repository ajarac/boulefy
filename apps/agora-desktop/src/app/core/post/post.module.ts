import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostState } from '@agora-desktop/core/post/store/post.state'
import { PostListState } from '@agora-desktop/core/post/store/post-list.state'
import { PostDetailState } from '@agora-desktop/core/post/store/post-detail.state'
import { CommentService } from '@agora-desktop/core/post/services/comment.service'

@NgModule({
    imports: [NgxsModule.forFeature([PostState, PostListState, PostDetailState])],
    providers: [PostService, CommentService]
})
export class PostModule {}
