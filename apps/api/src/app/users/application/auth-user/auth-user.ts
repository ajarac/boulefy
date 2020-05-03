import { Injectable } from '@nestjs/common'
import { UserRepository } from '../../domain/user.repository'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserPassword } from '../../domain/user-password'
import { User } from '../../domain/user'
import { UserResponse } from '../user.response'

@Injectable()
export class AuthUser {
    constructor(private repository: UserRepository) {}

    async validate(username: UserName, password: UserPassword): Promise<UserResponse> {
        const user: User = await this.repository.validateUser(username, password)
        return user ? UserResponse.fromAggregate(user) : null
    }
}
