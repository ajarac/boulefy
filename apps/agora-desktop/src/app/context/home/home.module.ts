import { NgModule } from '@angular/core'

import { SharedModule } from '../../shared/shared.module'

import { HomeMainComponent } from './pages/main/home-main.component'
import { HomeRoutingModule } from './home-routing.module'
import { PostItemComponent } from './components/post-item/post-item.component'

@NgModule({
    imports: [SharedModule, HomeRoutingModule],
    declarations: [HomeMainComponent, PostItemComponent]
})
export class HomeModule {}
