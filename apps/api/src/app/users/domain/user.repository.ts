import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserPassword } from '@api/users/domain/user-password'
import { User } from '@api/users/domain/user'

export abstract class UserRepository {
    abstract search(id: UserId): Promise<User>

    abstract register(user: User): Promise<void>

    abstract update(user: User): Promise<void>

    abstract validateUser(username: UserName, password: UserPassword): Promise<User>
}
