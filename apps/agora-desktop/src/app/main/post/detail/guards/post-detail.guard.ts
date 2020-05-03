import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Store } from '@ngxs/store'
import { LoadPostById } from '@agora-desktop/core/post/store/post.action'
import { LoadCommentsByPostId } from '@agora-desktop/core/post/store/comment.action'

@Injectable()
export class PostDetailGuard implements CanActivate {
    constructor(private store: Store) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id: string = route.paramMap.get('id')
        this.store.dispatch([new LoadPostById(id), new LoadCommentsByPostId(id)])
        return true
    }
}
