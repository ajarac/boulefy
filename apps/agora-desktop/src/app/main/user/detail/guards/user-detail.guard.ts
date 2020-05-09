import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Store } from '@ngxs/store'
import { LoadUserDetail } from '@agora-desktop/core/users/detail/store/user-detail.action'

@Injectable()
export class UserDetailGuard implements CanActivate {
    constructor(private store: Store) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id: string = route.paramMap.get('id')
        this.store.dispatch(new LoadUserDetail(id))
        return true
    }
}
