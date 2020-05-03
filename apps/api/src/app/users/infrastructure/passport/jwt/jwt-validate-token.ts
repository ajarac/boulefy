import { Injectable } from '@nestjs/common'
import { UserValidateToken } from '../../../domain/user-validate-token'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class JwtValidateToken extends UserValidateToken {
    constructor(private jwtService: JwtService) {
        super()
    }

    validate(token: string) {
        return this.jwtService.verify(token)
    }
}
