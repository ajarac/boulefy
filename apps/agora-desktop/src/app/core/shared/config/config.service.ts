import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { environment } from '../../../../environments/environment'

@Injectable()
export class ConfigService {
    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    get api(): string {
        if (isPlatformBrowser(this.platformId)) {
            return environment.browser.api
        }
        if (isPlatformServer(this.platformId)) {
            return environment.server.api
        }
    }
}
