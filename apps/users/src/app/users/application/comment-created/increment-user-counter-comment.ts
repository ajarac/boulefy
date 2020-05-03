import { Injectable } from '@nestjs/common'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserRepository } from '@users/users/domain/user.repository'
import { User } from '@users/users/domain/user'

@Injectable()
export class IncrementUserCounterComment {
    constructor(private repository: UserRepository) {}

    async increment(userId: UserId): Promise<void> {
        const user: User = await this.repository.search(userId)

        user.incrementCounterComments()

        await this.repository.update(user)
    }
}
