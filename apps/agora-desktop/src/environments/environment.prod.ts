import { Environment } from './environment.model'

export const environment: Environment = {
    production: true,
    browser: {
        api: 'api/'
    },
    server: {
        api: 'http://api:3333/api/'
    }
}
