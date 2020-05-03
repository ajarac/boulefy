import { User } from '../../../domain/user'
import { UserSchema } from './user.schema'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserCounterComments } from '../../../domain/user-counter-comments'
import { UserCounterPosts } from '../../../domain/user-counter-posts'
import { UserEmail } from '../../../domain/user-email'
import { UserPassword } from '../../../domain/user-password'
import { from } from 'uuid-mongodb'

export class UserMapper {
    static fromSchema(userSchema: UserSchema): User {
        const id: UserId = new UserId(from(userSchema._id).toString())
        const name: UserName = new UserName(userSchema.username)
        const password: UserPassword = new UserPassword(userSchema.password)
        const email: UserEmail = new UserEmail(userSchema.email)
        const counterComments: UserCounterComments = new UserCounterComments(userSchema.counterComments)
        const counterPosts: UserCounterPosts = new UserCounterPosts(userSchema.counterPosts)

        return new User(id, name, password, email, counterComments, counterPosts)
    }

    static toSchema(user: User): UserSchema {
        const userSchema: UserSchema = new UserSchema()
        userSchema._id = from(user.id.value)
        userSchema.username = user.username.value
        userSchema.password = user.password.value
        userSchema.email = user.email.value
        userSchema.counterComments = user.counterComments.value
        userSchema.counterPosts = user.counterPosts.value
        return userSchema
    }
}
