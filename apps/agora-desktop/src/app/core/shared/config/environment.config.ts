import { InjectionToken } from '@angular/core'
import { Environment } from '../../../../environments/environment.model'

export const CONFIG_TOKEN: InjectionToken<Environment> = new InjectionToken<Environment>('CONFIG')
