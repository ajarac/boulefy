import { AccessToken } from '@shared/auth/accesst-token'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'

export abstract class UserTokenGenerator {
    abstract sign(id: UserId, username: UserName): AccessToken
}
