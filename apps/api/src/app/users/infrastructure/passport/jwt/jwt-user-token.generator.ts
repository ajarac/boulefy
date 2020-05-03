import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserTokenGenerator } from '../../../domain/user-token.generator'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserId } from '@backend/shared/domain/user/user-id'
import { AccessToken } from '@shared/auth/accesst-token'

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
