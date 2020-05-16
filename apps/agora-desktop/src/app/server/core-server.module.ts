import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ServerStateInterceptor } from '@agora-desktop/server/interceptors/server-state.interceptor'
import { ServerTransferStateModule } from '@angular/platform-server'

@NgModule({
    imports: [ServerTransferStateModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerStateInterceptor,
            multi: true
        }
    ]
})
export class CoreServerModule {}
