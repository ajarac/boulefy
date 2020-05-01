import { Action, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { UserLogged } from '@agora-desktop/core/auth/store/auth/auth.action'
import { Navigate } from '@ngxs/router-plugin'

@State<void>({
    name: 'authRoute'
})
@Injectable()
export class AuthRouteState {
    @Action(UserLogged)
    userLogged({ dispatch }: StateContext<void>): void {
        dispatch(new Navigate(['/']))
    }
}
