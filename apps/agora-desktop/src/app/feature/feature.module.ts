import { NgModule } from '@angular/core'
import {
    NbActionsModule,
    NbBadgeModule,
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbSpinnerModule,
    NbUserModule
} from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { FlexLayoutModule } from '@angular/flex-layout'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

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
        NbBadgeModule,
        NbListModule,
        InfiniteScrollModule,
        NbSpinnerModule
    ]
})
export class FeatureModule {}
