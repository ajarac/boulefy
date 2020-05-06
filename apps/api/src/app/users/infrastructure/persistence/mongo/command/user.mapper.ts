import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@backend/shared/domain/user/user-name'
import { from } from 'uuid-mongodb'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserPassword } from '@api/users/domain/user-password'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { User } from '@api/users/domain/user'
import { UserCreatedDate } from '@api/users/domain/user-created-date'

export class UserMapper {
    static fromSchema(userSchema: UserSchema): User {
        const id: UserId = new UserId(from(userSchema._id).toString())
        const name: UserName = new UserName(userSchema.username)
        const password: UserPassword = new UserPassword(userSchema.password)
        const email: UserEmail = new UserEmail(userSchema.email)
        const counterComments: UserCounterComments = new UserCounterComments(userSchema.counterComments)
        const counterPosts: UserCounterPosts = new UserCounterPosts(userSchema.counterPosts)
        const createdDate: UserCreatedDate = new UserCreatedDate(userSchema.createdDate)

        return new User(id, name, password, email, counterComments, counterPosts, createdDate)
    }

    static toSchema(user: User): UserSchema {
        const userSchema: UserSchema = new UserSchema()
        userSchema._id = from(user.id.value)
        userSchema.username = user.username.value
        userSchema.password = user.password.value
        userSchema.email = user.email.value
        userSchema.counterComments = user.counterComments.value
        userSchema.counterPosts = user.counterPosts.value
        userSchema.createdDate = user.createdDate.value
        return userSchema
    }
}
