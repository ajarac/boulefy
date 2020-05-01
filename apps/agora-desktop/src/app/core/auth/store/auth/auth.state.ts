import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { AccessToken } from '@shared/auth/accesst-token'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { AuthService } from '@agora-desktop/core/auth/services/auth.service'
import { LoginUser, RegisterUser, UserLogged, UserRegistered } from '@agora-desktop/core/auth/store/auth/auth.action'
import { AuthRouteState } from '@agora-desktop/core/auth/store/auth/auth-route.state'

type IAuthState = AccessToken

@State<IAuthState>({
    name: 'auth',
    defaults: {
        accessToken: null
    },
    children: [AuthRouteState]
})
@Injectable()
export class AuthState {
    @Selector()
    static isLogged({ accessToken }: IAuthState): boolean {
        return !!accessToken
    }

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
    loginUser({ dispatch }: StateContext<IAuthState>, { username, password }: LoginUser): Observable<AccessToken> {
        return this.authService.login(username, password).pipe(tap((token: AccessToken) => dispatch(new UserLogged(token))))
    }

    @Action(UserLogged)
    logged({ setState }: StateContext<IAuthState>, { accessToken }: UserLogged): void {
        setState(accessToken)
    }
}
