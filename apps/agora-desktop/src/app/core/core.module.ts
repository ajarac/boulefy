import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { NgxsModule } from '@ngxs/store'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { environment } from '../../environments/environment'
import { PostModule } from './post/post.module'

@NgModule({
    imports: [
        HttpClientModule,
        NgxsModule.forRoot([], { developmentMode: !environment.production }),
        environment.production ? NgxsReduxDevtoolsPluginModule.forRoot() : [],
        PostModule
    ],
    providers: [
        {
            provide: 'CONFIG',
            useValue: environment
        }
    ]
})
export class CoreModule {}
