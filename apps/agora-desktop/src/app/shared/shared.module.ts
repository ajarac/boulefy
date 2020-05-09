import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { InputComponent } from '@agora-desktop/shared/components/input/input.component'
import { FeatureModule } from '@agora-desktop/feature/feature.module'
import { TextAreaComponent } from '@agora-desktop/shared/components/text-area/text-area.component'
import { LoaderComponent } from '@agora-desktop/shared/components/loader/loader.component'

const COMPONENTS = [InputComponent, TextAreaComponent, LoaderComponent]
const MODULES = [CommonModule, RouterModule, FeatureModule, ReactiveFormsModule]

@NgModule({
    imports: [MODULES],
    declarations: [COMPONENTS],
    exports: [MODULES, COMPONENTS]
})
export class SharedModule {}
