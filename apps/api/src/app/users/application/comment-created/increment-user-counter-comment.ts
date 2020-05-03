import { Injectable } from '@nestjs/common'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserRepository } from '../../domain/user.repository'
import { User } from '../../domain/user'

@Injectable()
export class IncrementUserCounterComment {
    constructor(private repository: UserRepository) {}

    async increment(userId: UserId): Promise<void> {
        const user: User = await this.repository.search(userId)

        user.incrementCounterComments()

        await this.repository.update(user)
    }
}
