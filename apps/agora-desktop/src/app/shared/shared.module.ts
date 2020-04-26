import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureModule } from '../feature/feature.module'

@NgModule({
    imports: [CommonModule, FeatureModule],
    exports: [CommonModule, FeatureModule]
})
export class SharedModule {}
