import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { AuthService } from '@agora-desktop/core/auth/services/auth.service'
import { LoginUser, RegisterUser, UserLogged, UserRegistered } from '@agora-desktop/core/auth/store/auth/auth.action'

@State<string>({
    name: 'auth',
    defaults: null
})
@Injectable()
export class AuthState {
    constructor(private authService: AuthService) {}

    @Selector()
    static isLogged(token: string): boolean {
        return !!token
    }

    @Action(RegisterUser)
    registerUser({ dispatch }: StateContext<string>, { username, password, email }: RegisterUser): Observable<void> {
        return this.authService.register(username, password, email).pipe(tap(() => dispatch(new UserRegistered(username, password, email))))
    }

    @Action(UserRegistered)
    userRegistered({ dispatch }: StateContext<string>, { username, password }: UserRegistered): void {
        dispatch(new LoginUser(username, password))
    }

    @Action(LoginUser)
    loginUser({ dispatch }: StateContext<string>, { username, password }: LoginUser): Observable<string> {
        return this.authService.login(username, password).pipe(tap((token: string) => dispatch([new UserLogged(token)])))
    }

    @Action(UserLogged)
    logged({ setState }: StateContext<string>, { accessToken }: UserLogged): void {
        setState(accessToken)
    }
}
