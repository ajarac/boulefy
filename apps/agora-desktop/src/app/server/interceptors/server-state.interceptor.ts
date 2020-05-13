import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { makeStateKey, TransferState } from '@angular/platform-browser'
import { Injectable } from '@angular/core'
import { ConfigService } from '@agora-desktop/core/shared/config/config.service'

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {
    constructor(private transferState: TransferState, private configService: ConfigService) {}

    intercept<T>(req: HttpRequest<T>, next: HttpHandler) {
        console.log('URL', req.url)
        const request: HttpRequest<T> = req.clone({ url: this.configService.api + req.url })
        return next.handle(request).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    this.transferState.set(makeStateKey(req.url), event.body)
                }
            })
        )
    }
}
