import { NgModule } from '@angular/core'
import { NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'

@NgModule({
    imports: [NbThemeModule.forRoot(), NbSidebarModule.forRoot()],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [NbThemeModule, NbLayoutModule, NbSidebarModule, HeaderComponent, SidebarComponent]
})
export class ThemeModule {}
