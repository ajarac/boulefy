import { Injector } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Environment } from '../../../../environments/environment.model'
import { CONFIG_TOKEN } from '@agora-desktop/core/shared/config/environment.config'

export abstract class BaseService {
    protected http: HttpClient
    protected config: Environment

    protected constructor(injector: Injector) {
        this.http = injector.get(HttpClient)
        this.config = injector.get(CONFIG_TOKEN)
    }
}
