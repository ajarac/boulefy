import { NgModule } from '@angular/core'
import {
    NbActionsModule,
    NbBadgeModule,
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbIconModule,
    NbInputModule,
    NbUserModule
} from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
    exports: [
        FlexLayoutModule,
        NbCardModule,
        NbActionsModule,
        NbIconModule,
        NbEvaIconsModule,
        NbContextMenuModule,
        NbInputModule,
        NbButtonModule,
        NbUserModule,
        NbBadgeModule
    ]
})
export class FeatureModule {}
