import { UserResponse } from '@shared/models/user/user.response'

const KEY_STATE = '[Top Users]'

export class LoadTopUsers {
    static type = `${KEY_STATE} Load Top Users`
}

export class TopUsersLoaded {
    static type = `${KEY_STATE} Top Users Loaded`

    constructor(public users: UserResponse[]) {}
}
