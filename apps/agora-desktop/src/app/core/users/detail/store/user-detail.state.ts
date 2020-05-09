import { Action, Selector, State, StateContext } from '@ngxs/store'
import { UserResponse } from '@shared/models/user/user.response'
import { Injectable } from '@angular/core'
import { LoadUserDetail, UserDetailLoaded } from '@agora-desktop/core/users/detail/store/user-detail.action'
import { Observable } from 'rxjs'
import { UserService } from '@agora-desktop/core/users/detail/services/user.service'
import { tap } from 'rxjs/operators'

interface IUserDetailState {
    user: UserResponse
    loading: boolean
}

@State<IUserDetailState>({
    name: 'userDetail',
    defaults: null
})
@Injectable()
export class UserDetailState {
    constructor(private service: UserService) {}

    @Selector()
    static user({ user }: IUserDetailState): UserResponse {
        return user
    }

    @Selector()
    static loading({ loading }: IUserDetailState): boolean {
        return loading
    }

    @Action(LoadUserDetail)
    load({ dispatch, patchState }: StateContext<IUserDetailState>, { id }: LoadUserDetail): Observable<UserResponse> {
        patchState({ loading: true })
        return this.service.getById(id).pipe(tap((user: UserResponse) => dispatch(new UserDetailLoaded(user))))
    }

    @Action(UserDetailLoaded)
    loaded({ setState }: StateContext<IUserDetailState>, { user }: UserDetailLoaded): void {
        setState({ user, loading: false })
    }
}
