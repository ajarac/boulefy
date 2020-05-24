import { from } from 'uuid-mongodb'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserPassword } from '@api/users/domain/user-password'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { User } from '@api/users/domain/user'
import { UserCreatedDate } from '@api/users/domain/user-created-date'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'

export class UserMapper {
    static fromSchema(userSchema: UserSchema): User {
        return new User({
            id: new UserId(from(userSchema._id).toString()),
            username: new UserName(userSchema.username),
            password: new UserPassword(userSchema.password),
            email: new UserEmail(userSchema.email),
            counterComments: new UserCounterComments(userSchema.counterComments),
            counterPosts: new UserCounterPosts(userSchema.counterPosts),
            createdDate: new UserCreatedDate(userSchema.createdDate)
        })
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
