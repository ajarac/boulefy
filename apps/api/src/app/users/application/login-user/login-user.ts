import { Injectable } from '@nestjs/common'
import { UserTokenGenerator } from '../../domain/user-token.generator'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '../../domain/user-name'
import { AccessToken } from '@shared/auth/accesst-token'

@Injectable()
export class LoginUser {
    constructor(private userTokenGenerator: UserTokenGenerator) {}

    login(id: UserId, username: UserName): AccessToken {
        return this.userTokenGenerator.sign(id, username)
    }
}
