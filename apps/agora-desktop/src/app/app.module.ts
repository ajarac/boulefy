import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { ThemeModule } from '@agora-desktop/theme/theme.module'
import { CoreModule } from '@agora-desktop/core/core.module'
import { AppRoutingModule } from '@agora-desktop/app-routing.module'
import { AppComponent } from '@agora-desktop/app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ThemeModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
