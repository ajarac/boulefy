import { Action, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { AccessToken } from '@shared/auth/accesst-token'
import { AuthService } from '../../services/auth.service'
import { LoginUser, RegisterUser, UserRegistered } from './auth.action'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

type IAuthState = AccessToken

@State<IAuthState>({
    name: 'auth',
    defaults: {
        accessToken: null
    }
})
@Injectable()
export class AuthState {
    constructor(private authService: AuthService) {}

    @Action(RegisterUser)
    registerUser({ dispatch }: StateContext<IAuthState>, { username, password, email }: RegisterUser): Observable<void> {
        return this.authService.register(username, password, email).pipe(tap(() => dispatch(new UserRegistered(username, password, email))))
    }

    @Action(UserRegistered)
    userRegistered({ dispatch }: StateContext<IAuthState>, { username, password }: UserRegistered): void {
        dispatch(new LoginUser(username, password))
    }

    @Action(LoginUser)
    loginUser({ setState }: StateContext<IAuthState>, { username, password }: LoginUser): Observable<AccessToken> {
        return this.authService.login(username, password).pipe(tap((token: AccessToken) => setState(token)))
    }
}
