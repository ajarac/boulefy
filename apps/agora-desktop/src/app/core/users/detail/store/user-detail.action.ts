import { UserResponse } from '@shared/models/user/user.response'

const KEY_STATE = '[User Detail]'

export class LoadUserDetail {
    static type = `${KEY_STATE} Load User Detail`

    constructor(public id: string) {}
}

export class UserDetailLoaded {
    static type = `${KEY_STATE} User Detail Loaded`

    constructor(public user: UserResponse) {}
}
