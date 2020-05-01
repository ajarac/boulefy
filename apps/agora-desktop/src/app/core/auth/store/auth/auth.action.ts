import { AccessToken } from '@shared/auth/accesst-token'

const KEY_STATE = '[Auth]'

export class RegisterUser {
    static type = `${KEY_STATE} Register User`

    constructor(public username: string, public password: string, public email: string) {}
}

export class UserRegistered {
    static type = `${KEY_STATE} User Registered`

    constructor(public username: string, public password: string, public email: string) {}
}

export class LoginUser {
    static type = `${KEY_STATE} Login User`

    constructor(public username: string, public password: string) {}
}

export class UserLogged {
    static type = `${KEY_STATE} User Logged`

    constructor(public accessToken: AccessToken) {}
}
