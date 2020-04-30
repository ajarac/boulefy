import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { environment } from '../../environments/environment'
import { PostModule } from './post/post.module'
import { AuthModule } from './auth/auth.module'

@NgModule({
    imports: [
        HttpClientModule,
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        NgxsDispatchPluginModule.forRoot(),
        !environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : [],
        PostModule,
        AuthModule
    ],
    providers: [
        {
            provide: 'CONFIG',
            useValue: environment
        }
    ]
})
export class CoreModule {}
