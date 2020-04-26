import { Injectable } from '@nestjs/common'
import { UserRepository } from '@users/users/domain/user.repository'
import { UserName } from '@users/users/domain/user-name'
import { UserPassword } from '@users/users/domain/user-password'
import { User } from '@users/users/domain/user'
import { UserResponse } from '@users/users/application/user.response'

@Injectable()
export class AuthUser {
    constructor(private repository: UserRepository) {}

    async validate(username: UserName, password: UserPassword): Promise<UserResponse> {
        const user: User = await this.repository.validateUser(username, password)
        return user ? UserResponse.fromAggregate(user) : null
    }
}
