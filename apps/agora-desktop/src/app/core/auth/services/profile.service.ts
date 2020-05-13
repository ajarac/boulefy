import { Injectable, Injector } from '@angular/core'
import { Observable } from 'rxjs'
import { UserResponse } from '@shared/models/user/user.response'
import { BaseService } from '@agora-desktop/core/shared/services/base.service'

@Injectable()
export class ProfileService extends BaseService {

    constructor(injector: Injector) {
        super(injector)
    }

    profile(): Observable<UserResponse> {
        return this.http.get<UserResponse>('profile')
    }
}
