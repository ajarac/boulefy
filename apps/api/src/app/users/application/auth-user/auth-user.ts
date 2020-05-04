import { Injectable } from '@nestjs/common'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserResponse } from '@shared/models/user/user.response'
import { UserResponseMapper } from '@api/users/application/user-response.mapper'
import { UserRepository } from '@api/users/domain/user.repository'
import { UserPassword } from '@api/users/domain/user-password'
import { User } from '@api/users/domain/user'

@Injectable()
export class AuthUser {
    constructor(private repository: UserRepository) {}

    async validate(username: UserName, password: UserPassword): Promise<UserResponse> {
        const user: User = await this.repository.validateUser(username, password)
        return user ? UserResponseMapper.fromAggregate(user) : null
    }
}
