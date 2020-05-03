import { UserName } from './user-name'
import { UserId } from '@backend/shared/domain/user/user-id'
import { AccessToken } from '@shared/auth/accesst-token'

export abstract class UserTokenGenerator {
    abstract sign(id: UserId, username: UserName): AccessToken
}
