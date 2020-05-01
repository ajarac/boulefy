import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin'
import { CustomRouterStateSerializer } from '@agora-desktop/core/router/custom-router-serializer'
import { RouterState } from '@agora-desktop/core/router/router.state'

@NgModule({
    imports: [NgxsModule.forFeature([RouterState]), NgxsRouterPluginModule.forRoot()],
    providers: [{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }]
})
export class CoreRouterModule {}
