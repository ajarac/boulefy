import { NgModule } from '@angular/core'
import { SharedModule } from '@agora-desktop/shared/shared.module'
import { PostEditComponent } from '@agora-desktop/main/post/edit/post-edit.component'
import { PostEditRoutingModule } from '@agora-desktop/main/post/edit/post-edit-routing.module'

@NgModule({
    imports: [SharedModule, PostEditRoutingModule],
    declarations: [PostEditComponent]
})
export class PostEditModule {}
