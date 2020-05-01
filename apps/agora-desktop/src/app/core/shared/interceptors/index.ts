import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from '@agora-desktop/core/shared/interceptors/auth.interceptor'

export const INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
]
