import { NgModule } from '@angular/core'
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme'
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { FeatureModule } from '../feature/feature.module'

@NgModule({
    imports: [NbThemeModule.forRoot(), NbSidebarModule.forRoot(), NbMenuModule.forRoot(), FeatureModule],
    declarations: [HeaderComponent, SidebarComponent],
    exports: [NbThemeModule, NbLayoutModule, NbSidebarModule, HeaderComponent, SidebarComponent]
})
export class ThemeModule {}
