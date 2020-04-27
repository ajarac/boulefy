import { User } from '@users/users/domain/user'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'
import { UserEmail } from '@users/users/domain/user-email'
import { UserPassword } from '@users/users/domain/user-password'

export class UserMapper {
    static fromSchema(userSchema: UserSchema): User {
        const id: UserId = new UserId(userSchema._id)
        const name: UserName = new UserName(userSchema.username)
        const password: UserPassword = new UserPassword(userSchema.password)
        const email: UserEmail = new UserEmail(userSchema.email)
        const counterComments: UserCounterComments = new UserCounterComments(userSchema.counterComments)
        const counterPosts: UserCounterPosts = new UserCounterPosts(userSchema.counterPosts)

        return new User(id, name, password, email, counterComments, counterPosts)
    }

    static toSchema(user: User): UserSchema {
        const userSchema: UserSchema = new UserSchema()
        userSchema._id = user.id.value
        userSchema.username = user.username.value
        userSchema.password = user.password.value
        userSchema.email = user.email.value
        userSchema.counterComments = user.counterComments.value
        userSchema.counterPosts = user.counterPosts.value
        return userSchema
    }
}
