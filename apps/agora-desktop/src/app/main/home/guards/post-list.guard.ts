import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Store } from '@ngxs/store'
import { LoadPosts } from '@agora-desktop/core/post/store/post.action'

@Injectable()
export class PostListGuard implements CanActivate {
    constructor(private store: Store) {}

    canActivate(): boolean {
        this.store.dispatch(new LoadPosts())
        return true
    }
}
