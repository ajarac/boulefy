import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureModule } from '../feature/feature.module'
import { InputComponent } from './components/input/input.component'
import { ReactiveFormsModule } from '@angular/forms'

const COMPONENTS = [InputComponent]
const MODULES = [CommonModule, FeatureModule, ReactiveFormsModule]

@NgModule({
    imports: [MODULES],
    declarations: [COMPONENTS],
    exports: [MODULES, COMPONENTS]
})
export class SharedModule {}
