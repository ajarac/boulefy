import { User } from './user'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from './user-name'
import { UserPassword } from './user-password'

export abstract class UserRepository {
    abstract search(id: UserId): Promise<User>

    abstract register(user: User): Promise<void>

    abstract update(user: User): Promise<void>

    abstract validateUser(username: UserName, password: UserPassword): Promise<User>
}
