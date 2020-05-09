import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostState } from '@agora-desktop/core/post/store/post.state'
import { PostListState } from '@agora-desktop/core/post/store/list/post-list.state'
import { PostDetailState } from '@agora-desktop/core/post/store/detail/post-detail.state'

@NgModule({
    imports: [NgxsModule.forFeature([PostState, PostListState, PostDetailState])],
    providers: [PostService]
})
export class PostModule {}
