import { UserNameMother } from '@api/test/shared/domain/user/user-name.mother'
import { UserPasswordMother } from '@api/test/shared/domain/user/user-password.mother'
import { UserEmailMother } from '@api/test/shared/domain/user/user-email.mother'
import { UserCounterCommentsMother } from '@api/test/shared/domain/user/user-counter-comments.mother'
import { UserCounterPostsMother } from '@api/test/shared/domain/user/user-counter-posts.mother'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserPassword } from '@api/users/domain/user-password'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { User } from '@api/users/domain/user'
import { UserCreatedDate } from '@api/users/domain/user-created-date'

export class UserMother {
    static create(
        id: UserId,
        username: UserName,
        password: UserPassword,
        email: UserEmail,
        counterComments: UserCounterComments,
        counterPosts: UserCounterPosts,
        createdDate: UserCreatedDate
    ): User {
        return new User(id, username, password, email, counterComments, counterPosts, createdDate)
    }

    static random(): User {
        return UserMother.create(
            UserIdMother.random(),
            UserNameMother.random(),
            UserPasswordMother.random(),
            UserEmailMother.random(),
            UserCounterCommentsMother.random(),
            UserCounterPostsMother.random(),
            UserCreatedDate.create()
        )
    }

    static randomById(id: UserId): User {
        return UserMother.create(
            id,
            UserNameMother.random(),
            UserPasswordMother.random(),
            UserEmailMother.random(),
            UserCounterCommentsMother.random(),
            UserCounterPostsMother.random(),
            UserCreatedDate.create()
        )
    }
}
