import { Injectable } from '@nestjs/common'
import { UserRepository } from '../../domain/user.repository'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserResponse } from '../user.response'
import { User } from '../../domain/user'

@Injectable()
export class UserFinder {
    constructor(private repository: UserRepository) {}

    async find(id: UserId): Promise<UserResponse> {
        const user: User = await this.repository.search(id)
        return UserResponse.fromAggregate(user)
    }
}
