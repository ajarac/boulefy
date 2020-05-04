import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UserResponse } from '@shared/models/user/user.response'
import { HttpClient } from '@angular/common/http'
import { Environment } from '../../../../environments/environment.model'

@Injectable()
export class ProfileService {
    private readonly baseUrl: string = this.config.api

    constructor(private http: HttpClient, @Inject('CONFIG') private config: Environment) {}

    profile(): Observable<UserResponse> {
        return this.http.get<UserResponse>(this.baseUrl + 'profile')
    }
}
