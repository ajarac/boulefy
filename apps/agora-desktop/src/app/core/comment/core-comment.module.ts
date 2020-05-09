import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { CommentService } from '@agora-desktop/core/comment/services/comment.service'
import { CommentState } from '@agora-desktop/core/comment/store/comment.state'

@NgModule({
    imports: [NgxsModule.forFeature([CommentState])],
    providers: [CommentService]
})
export class CoreCommentModule {}
