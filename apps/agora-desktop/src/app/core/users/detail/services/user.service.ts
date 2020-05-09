import { Injectable, Injector } from '@angular/core'
import { BaseService } from '@agora-desktop/core/shared/services/base.service'
import { Observable } from 'rxjs'
import { UserResponse } from '@shared/models/user/user.response'

@Injectable()
export class UserService extends BaseService {
    private readonly baseUrl: string = this.config.api + 'users'

    constructor(injector: Injector) {
        super(injector)
    }

    getById(id: string): Observable<UserResponse> {
        return this.http.get<UserResponse>(this.baseUrl + '/' + id)
    }
}
