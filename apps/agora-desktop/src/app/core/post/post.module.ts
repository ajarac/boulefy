import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { PostService } from '@agora-desktop/core/post/services/post.service'
import { PostState } from '@agora-desktop/core/post/store/post.state'

@NgModule({
    imports: [
        NgxsModule.forFeature([PostState])
    ],
    providers: [
        PostService
    ]
})
export class PostModule {}
