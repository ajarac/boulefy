import { User } from '@users/users/domain/user'
import { UserId } from '@users/users/domain/user-id'

export abstract class UserRepository {
    abstract register(user: User): Promise<void>

    abstract search(id: UserId): Promise<User>
}
