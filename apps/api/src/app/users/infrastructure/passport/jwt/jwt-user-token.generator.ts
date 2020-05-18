import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AccessToken } from '@shared/auth/accesst-token'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserTokenGenerator } from '@api/users/domain/user-token.generator'

@Injectable()
export class JwtUserTokenGenerator extends UserTokenGenerator {
    constructor(private jwtService: JwtService) {
        super()
    }

    sign(id: UserId, username: UserName): AccessToken {
        const payload = { id: id.value, username: username.value }
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
