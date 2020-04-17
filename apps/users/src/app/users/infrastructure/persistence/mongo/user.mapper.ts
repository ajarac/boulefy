import { User } from '@users/users/domain/user'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'

export class UserMapper {
    static fromSchema(userSchema: UserSchema): User {
        const id: UserId = new UserId(userSchema.id)
        const name: UserName = new UserName(userSchema.name)
        const counterComments: UserCounterComments = new UserCounterComments(userSchema.counterComments)
        const counterPosts: UserCounterPosts = new UserCounterPosts(userSchema.counterPosts)

        return new User(id, name, counterComments, counterPosts)
    }

    static toSchema(user: User): UserSchema {
        const userSchema: UserSchema = new UserSchema()
        userSchema.id = user.id.value
        userSchema.name = user.name.value
        userSchema.counterComments = user.counterComments.value
        userSchema.counterPosts = user.counterPosts.value
        return userSchema
    }
}
