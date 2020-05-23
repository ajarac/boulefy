import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { UserMapper } from '@api/users/infrastructure/persistence/mongo/command/user.mapper'
import { User } from '@api/users/domain/user'
import { UserMother } from '@api/test/shared/domain/user/user.mother'
import { UserId } from '@api/shared/domain/user/user-id'

export class UserSchemaMother {
    static create(user: User): UserSchema {
        return UserMapper.toSchema(user)
    }

    static random(): UserSchema {
        return UserSchemaMother.create(UserMother.random())
    }

    static randomById(id: UserId): UserSchema {
        return UserSchemaMother.create(UserMother.randomById(id))
    }
}
