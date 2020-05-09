import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { environment } from '../../environments/environment'

import { AuthModule } from '@agora-desktop/core/auth/auth.module'
import { PostModule } from '@agora-desktop/core/post/post.module'
import { CoreRouterModule } from '@agora-desktop/core/router/core-router.module'
import { INTERCEPTORS } from '@agora-desktop/core/shared/interceptors'
import { CONFIG_TOKEN } from '@agora-desktop/core/shared/config/environment.config'
import { CommentModule } from '@agora-desktop/core/comment/comment.module'

@NgModule({
    imports: [
        HttpClientModule,
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        NgxsDispatchPluginModule.forRoot(),
        !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : [],
        NgxsStoragePluginModule.forRoot({
            key: ['auth']
        }),
        CoreRouterModule,
        PostModule,
        CommentModule,
        AuthModule
    ],
    providers: [
        {
            provide: CONFIG_TOKEN,
            useValue: environment
        },
        INTERCEPTORS
    ]
})
export class CoreModule {}
