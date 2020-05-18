import { Injectable } from '@nestjs/common'
import { UserRepository } from '@api/users/domain/user.repository'
import { UserId } from '@api/shared/domain/user/user-id'
import { User } from '@api/users/domain/user'

@Injectable()
export class IncrementUserCounterPost {
    constructor(private repository: UserRepository) {}

    async increment(userId: UserId): Promise<void> {
        const user: User = await this.repository.search(userId)

        user.incrementCounterPost()

        await this.repository.update(user)
    }
}
