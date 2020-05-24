import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { UserMapper } from '@api/users/infrastructure/persistence/mongo/command/user.mapper'
import { User, UserArgs } from '@api/users/domain/user'
import { UserMother } from '@api/test/shared/domain/user/user.mother'

export class UserSchemaMother {
    static create(user: User): UserSchema {
        return UserMapper.toSchema(user)
    }

    static random(userArgs: Partial<UserArgs> = {}): UserSchema {
        return UserSchemaMother.create(UserMother.random(userArgs))
    }

    static saveRandom(userArgs: Partial<UserArgs> = {}): Promise<UserSchema> {
        const userSchema: UserSchema = UserSchemaMother.random(userArgs)
        return userSchema.save()
    }

    static save(user: User): Promise<UserSchema> {
        const userSchema: UserSchema = UserSchemaMother.create(user)
        return userSchema.save()
    }
}
