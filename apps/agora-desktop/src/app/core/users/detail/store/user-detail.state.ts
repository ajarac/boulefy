import { Action, State, StateContext } from '@ngxs/store'
import { UserResponse } from '@shared/models/user/user.response'
import { Injectable } from '@angular/core'
import { LoadUserDetail, UserDetailLoaded } from '@agora-desktop/core/users/detail/store/user-detail.action'
import { Observable } from 'rxjs'
import { UserService } from '@agora-desktop/core/users/detail/services/user.service'
import { tap } from 'rxjs/operators'

@State<UserResponse>({
    name: 'userDetail',
    defaults: null
})
@Injectable()
export class UserDetailState {
    constructor(private service: UserService) {}

    @Action(LoadUserDetail)
    load({ dispatch }: StateContext<UserResponse>, { id }: LoadUserDetail): Observable<UserResponse> {
        return this.service.getById(id).pipe(tap((user: UserResponse) => dispatch(new UserDetailLoaded(user))))
    }

    @Action(UserDetailLoaded)
    loaded({ setState }: StateContext<UserResponse>, { user }: UserDetailLoaded): void {
        setState(user)
    }
}
