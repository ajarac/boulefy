import { Action, NgxsOnInit, State, StateContext, Store } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { UserResponse } from '@shared/models/user/user.response'
import { LoadUserProfile, UserProfileLoaded } from '@agora-desktop/core/auth/store/profile/profile.action'
import { ProfileService } from '@agora-desktop/core/auth/services/profile.service'
import { UserLogged } from '@agora-desktop/core/auth/store/auth/auth.action'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'

@State<UserResponse>({
    name: 'profile',
    defaults: null
})
@Injectable()
export class ProfileState implements NgxsOnInit {
    constructor(private service: ProfileService, private store: Store) {}

    ngxsOnInit({ dispatch }: StateContext<UserResponse>): void {
        if (this.isLogged()) {
            dispatch(new LoadUserProfile())
        }
    }

    @Action([LoadUserProfile, UserLogged])
    load({ dispatch }: StateContext<UserResponse>): Observable<UserResponse> {
        return this.service.profile().pipe(tap((user: UserResponse) => dispatch(new UserProfileLoaded(user))))
    }

    @Action(UserProfileLoaded)
    loaded({ setState }: StateContext<UserResponse>, { user }: UserProfileLoaded): void {
        setState(user)
    }

    private isLogged(): boolean {
        return this.store.selectSnapshot(AuthState.isLogged)
    }
}
