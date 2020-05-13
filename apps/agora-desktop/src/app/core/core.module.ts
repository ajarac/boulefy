import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { environment } from '../../environments/environment'

import { CoreAuthModule } from '@agora-desktop/core/auth/core-auth.module'
import { CorePostModule } from '@agora-desktop/core/post/core-post.module'
import { CoreRouterModule } from '@agora-desktop/core/router/core-router.module'
import { INTERCEPTORS } from '@agora-desktop/core/shared/interceptors'
import { ConfigService } from '@agora-desktop/core/shared/config/config.service'
import { CoreCommentModule } from '@agora-desktop/core/comment/core-comment.module'
import { CoreUsersModule } from '@agora-desktop/core/users/core-users.module'
import { BrowserTransferStateModule } from '@angular/platform-browser'

@NgModule({
    imports: [
        HttpClientModule,
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        NgxsDispatchPluginModule.forRoot(),
        !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : [],
        NgxsStoragePluginModule.forRoot({
            key: ['auth']
        }),
        BrowserTransferStateModule,
        CoreRouterModule,
        CorePostModule,
        CoreCommentModule,
        CoreAuthModule,
        CoreUsersModule
    ],
    providers: [ConfigService, INTERCEPTORS]
})
export class CoreModule {}
