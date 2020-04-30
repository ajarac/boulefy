import { NgModule } from '@angular/core'
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule } from '@nebular/theme'
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
        NbButtonModule
    ]
})
export class FeatureModule {}
