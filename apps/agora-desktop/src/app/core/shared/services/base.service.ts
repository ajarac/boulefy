import { Injector } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export abstract class BaseService {
    protected http: HttpClient

    protected constructor(injector: Injector) {
        this.http = injector.get(HttpClient)
    }
}
