import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { AccessToken } from '@shared/auth/accesst-token'
import { UuidGeneratorService } from '@agora-desktop/core/shared/services/uuid-generator.service'
import { Environment } from '../../../../environments/environment.model'
import { map } from 'rxjs/operators'

@Injectable()
export class AuthService {
    private readonly baseUrl: string = this.config.api

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    register(username: string, password: string, email: string): Observable<void> {
        const url: string = `${this.baseUrl}register/${UuidGeneratorService.generate()}`
        return this.http.post<void>(url, { username, password, email })
    }

    login(username: string, password: string): Observable<string> {
        return this.http
            .post<AccessToken>(this.baseUrl + 'login', { username, password })
            .pipe(map(({ accessToken }: AccessToken) => accessToken))
    }
}
