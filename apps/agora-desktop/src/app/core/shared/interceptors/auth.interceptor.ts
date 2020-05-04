import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { AuthState } from '@agora-desktop/core/auth/store/auth/auth.state'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store) {}

    intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        const accessToken: string = this.store.selectSnapshot(AuthState)
        const request = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        })
        return next.handle(request)
    }
}
