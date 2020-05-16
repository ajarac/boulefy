import { Injectable, Injector } from '@angular/core'
import { Observable } from 'rxjs'

import { AccessToken } from '@shared/auth/accesst-token'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { map } from 'rxjs/operators'
import { BaseService } from '@agora-desktop/core/shared/services/base.service'

@Injectable()
export class AuthService extends BaseService {
    constructor(injector: Injector) {
        super(injector)
    }

    register(username: string, password: string, email: string): Observable<void> {
        const url: string = `register/${UuidGeneratorService.generate()}`
        return this.http.post<void>(url, { username, password, email })
    }

    login(username: string, password: string): Observable<string> {
        return this.http
            .post<AccessToken>('login', { username, password })
            .pipe(map(({ accessToken }: AccessToken) => accessToken))
    }
}
