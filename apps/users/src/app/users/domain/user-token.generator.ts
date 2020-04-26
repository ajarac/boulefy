import { UserName } from '@users/users/domain/user-name'
import { UserId } from '@backend/shared/domain/user/user-id'

export interface AccessToken {
    accessToken: string
}

export abstract class UserTokenGenerator {
    abstract sign(id: UserId, username: UserName): AccessToken
}
