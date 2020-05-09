import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store'
import { UserResponse } from '@shared/models/user/user.response'
import { Injectable } from '@angular/core'
import { LoadTopUsers, TopUsersLoaded } from '@agora-desktop/core/users/top/store/top-users.action'
import { Observable } from 'rxjs'
import { TopUsersService } from '@agora-desktop/core/users/top/service/top-users.service'
import { tap } from 'rxjs/operators'

@State<UserResponse[]>({
    name: 'topUsers',
    defaults: []
})
@Injectable()
export class TopUsersState implements NgxsOnInit {
    constructor(private service: TopUsersService) {}

    ngxsOnInit({ dispatch }: StateContext<UserResponse[]>): void {
        dispatch(new LoadTopUsers())
    }

    @Action(LoadTopUsers)
    load({ dispatch }: StateContext<UserResponse[]>): Observable<UserResponse[]> {
        return this.service.getTop().pipe(tap((users: UserResponse[]) => dispatch(new TopUsersLoaded(users))))
    }

    @Action(TopUsersLoaded)
    loaded({ setState }: StateContext<UserResponse[]>, { users }: TopUsersLoaded): void {
        setState(users)
    }
}
