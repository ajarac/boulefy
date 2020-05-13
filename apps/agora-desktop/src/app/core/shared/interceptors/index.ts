import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from '@agora-desktop/core/shared/interceptors/auth.interceptor'
import { BrowserStateInterceptor } from '@agora-desktop/core/shared/interceptors/browser-state.interceptor'

export const INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: BrowserStateInterceptor,
        multi: true
    }
]
