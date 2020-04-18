import { Injectable } from '@nestjs/common'
import { UserRepository } from '@users/users/domain/user.repository'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserResponse } from '@users/users/application/user.response'
import { User } from '@users/users/domain/user'

@Injectable()
export class UserFinder {
    constructor(private repository: UserRepository) {}

    async find(id: UserId): Promise<UserResponse> {
        const user: User = await this.repository.search(id)
        return UserResponse.fromAggregate(user)
    }
}
