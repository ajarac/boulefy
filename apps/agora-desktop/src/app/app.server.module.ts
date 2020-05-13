import { NgModule } from '@angular/core'
import { ServerModule } from '@angular/platform-server'

import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { FlexLayoutServerModule } from '@angular/flex-layout/server'
import { CoreServerModule } from '@agora-desktop/server/core-server.module'

@NgModule({
    imports: [AppModule, ServerModule, CoreServerModule, FlexLayoutServerModule],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
