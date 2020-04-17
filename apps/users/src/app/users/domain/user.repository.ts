import { User } from '@users/users/domain/user'
import { UserId } from '@backend/shared/domain/user/user-id'

export abstract class UserRepository {
    abstract search(id: UserId): Promise<User>

    abstract register(user: User): Promise<void>

    abstract update(user: User): Promise<void>
}
