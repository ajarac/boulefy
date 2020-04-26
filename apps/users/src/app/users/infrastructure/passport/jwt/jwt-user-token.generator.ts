import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AccessToken, UserTokenGenerator } from '@users/users/domain/user-token.generator'
import { UserName } from '@users/users/domain/user-name'
import { UserId } from '@backend/shared/domain/user/user-id'

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
