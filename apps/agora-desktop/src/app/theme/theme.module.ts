import { NgModule } from '@angular/core'
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme'

import { HeaderComponent } from '@agora-desktop/theme/header/header.component'
import { SidebarComponent } from '@agora-desktop/theme/sidebar/sidebar.component'
import { SharedModule } from '@agora-desktop/shared/shared.module'

@NgModule({
    imports: [NbThemeModule.forRoot(), NbSidebarModule.forRoot(), NbMenuModule.forRoot(), SharedModule],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [NbThemeModule, NbLayoutModule, NbSidebarModule, HeaderComponent, SidebarComponent]
})
export class ThemeModule {}
