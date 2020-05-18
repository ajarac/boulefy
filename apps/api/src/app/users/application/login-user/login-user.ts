import { Injectable } from '@nestjs/common'
import { AccessToken } from '@shared/auth/accesst-token'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserTokenGenerator } from '@api/users/domain/user-token.generator'

@Injectable()
export class LoginUser {
    constructor(private userTokenGenerator: UserTokenGenerator) {}

    login(id: UserId, username: UserName): AccessToken {
        return this.userTokenGenerator.sign(id, username)
    }
}
