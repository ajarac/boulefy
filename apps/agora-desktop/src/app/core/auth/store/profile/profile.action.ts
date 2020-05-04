import { UserResponse } from '@shared/models/user/user.response'

const KEY_STATE = '[Profile]'

export class LoadUserProfile {
    static type = `${KEY_STATE} Get User Profile`
}

export class UserProfileLoaded {
    static type = `${KEY_STATE} User Profile Loaded`

    constructor(public user: UserResponse) {}
}
