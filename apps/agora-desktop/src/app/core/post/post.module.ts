import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { PostState } from './store/post.state'
import { PostService } from './services/post.service'

@NgModule({
    imports: [
        NgxsModule.forFeature([PostState])
    ],
    providers: [
        PostService
    ]
})
export class PostModule {}
