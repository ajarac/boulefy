import { Injectable } from '@nestjs/common'
import { UserRepository } from '@api/users/domain/user.repository'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserPassword } from '@api/users/domain/user-password'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'
import { User } from '@api/users/domain/user'

@Injectable()
export class UserRegistration {
    constructor(private repository: UserRepository) {}

    async register(
        id: UserId,
        username: UserName,
        password: UserPassword,
        email: UserEmail,
        counterComments: UserCounterComments,
        counterPosts: UserCounterPosts
    ): Promise<void> {
        if (await this.ensureUserNotExist(id)) {
            const user: User = User.create(id, username, password, email, counterComments, counterPosts)

            await this.repository.register(user)

            user.commit()
        }
    }

    private async ensureUserNotExist(id: UserId): Promise<boolean> {
        const user: User = await this.repository.search(id)
        return !user
    }
}
