import { UserNameMother } from '@api/test/shared/domain/user/user-name.mother'
import { UserPasswordMother } from '@api/test/shared/domain/user/user-password.mother'
import { UserEmailMother } from '@api/test/shared/domain/user/user-email.mother'
import { UserCounterCommentsMother } from '@api/test/shared/domain/user/user-counter-comments.mother'
import { UserCounterPostsMother } from '@api/test/shared/domain/user/user-counter-posts.mother'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { User, UserArgs } from '@api/users/domain/user'
import { UserCreatedDate } from '@api/users/domain/user-created-date'

export class UserMother {
    static create(userArgs: UserArgs): User {
        return new User(userArgs)
    }

    static random(userArgs: Partial<UserArgs> = {}): User {
        return UserMother.create({
            id: userArgs.id || UserIdMother.random(),
            username: userArgs.username || UserNameMother.random(),
            password: userArgs.password || UserPasswordMother.random(),
            email: userArgs.email || UserEmailMother.random(),
            counterComments: userArgs.counterComments || UserCounterCommentsMother.random(),
            counterPosts: userArgs.counterPosts || UserCounterPostsMother.random(),
            createdDate: userArgs.createdDate || UserCreatedDate.create()
        })
    }
}
