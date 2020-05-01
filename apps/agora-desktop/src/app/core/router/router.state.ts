import { Action, State, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { PostCreated } from '@agora-desktop/core/post/store/post.action'
import { Navigate } from '@ngxs/router-plugin'
import { UserLogged } from '@agora-desktop/core/auth/store/auth/auth.action'

@State<void>({
    name: 'routeEffect'
})
@Injectable()
export class RouterState {
    @Action(PostCreated)
    postCreated({ dispatch }: StateContext<void>, { id }: PostCreated): void {
        dispatch(new Navigate(['/post', id]))
    }

    @Action(UserLogged)
    userLogged({ dispatch }: StateContext<void>): void {
        dispatch(new Navigate(['/']))
    }
}
