import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs'
import { PostState } from '../../../../core/post/store/post.state'
import { Post } from '../../../../core/post/models/post'

@Component({
    selector: 'agora-home-main',
    templateUrl: 'home-main.component.html',
    styleUrls: ['./home-main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMainComponent {
    @Select(PostState.getPosts) posts$: Observable<Post[]>
}
