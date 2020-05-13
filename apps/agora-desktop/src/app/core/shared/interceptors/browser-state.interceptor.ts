import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { makeStateKey, TransferState } from '@angular/platform-browser'
import { Observable, of } from 'rxjs'
import { ConfigService } from '@agora-desktop/core/shared/config/config.service'
import { isPlatformBrowser } from '@angular/common'

@Injectable()
export class BrowserStateInterceptor implements HttpInterceptor {
    constructor(
        private transferState: TransferState,
        private configService: ConfigService,
        @Inject(PLATFORM_ID) private platformId: string
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            return next.handle(req)
        }

        const storedResponse: string = this.transferState.get(makeStateKey(req.url), null)
        this.transferState.remove(makeStateKey(req.url))
        if (storedResponse) {
            const response = new HttpResponse({ body: storedResponse, status: 200 })
            return of(response)
        }

        return isPlatformBrowser(this.platformId) ? next.handle(req.clone({ url: this.configService.api + req.url })) : next.handle(req)
    }
}
