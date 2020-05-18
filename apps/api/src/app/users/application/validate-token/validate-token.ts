import { Injectable } from '@nestjs/common'
import { UserValidateToken } from '@api/users/domain/user-validate-token'

@Injectable()
export class ValidateToken {
    constructor(private userValidateToken: UserValidateToken) {}

    validateToken(jwt: string) {
        return this.userValidateToken.validate(jwt)
    }
}
