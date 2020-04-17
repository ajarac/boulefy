import { Injectable } from '@nestjs/common'
import { UserRepository } from '@users/users/domain/user.repository'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'
import { User } from '@users/users/domain/user'

@Injectable()
export class UserRegistration {
    constructor(private repository: UserRepository) {}

    async register(id: UserId, name: UserName, counterComments: UserCounterComments, counterPosts: UserCounterPosts): Promise<void> {
        if (await this.ensureUserNotExist(id)) {
            const user: User = User.create(id, name, counterComments, counterPosts)

            await this.repository.register(user)

            user.commit()
        }
    }

    private async ensureUserNotExist(id: UserId): Promise<boolean> {
        const user: User = await this.repository.search(id)
        return !user
    }
}
