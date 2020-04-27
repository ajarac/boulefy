import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserPassword } from '@users/users/domain/user-password'
import { UserEmail } from '@users/users/domain/user-email'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'
import { User } from '@users/users/domain/user'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { UserNameMother } from '@backend/shared/test/domain/user/user-name.mother'
import { UserPasswordMother } from '@backend/shared/test/domain/user/user-password.mother'
import { UserEmailMother } from '@backend/shared/test/domain/user/user-email.mother'
import { UserCounterCommentsMother } from '@backend/shared/test/domain/user/user-counter-comments.mother'
import { UserCounterPostsMother } from '@backend/shared/test/domain/user/user-counter-posts.mother'

export class UserMother {
    static create(
        id: UserId,
        username: UserName,
        password: UserPassword,
        email: UserEmail,
        counterComments: UserCounterComments,
        counterPosts: UserCounterPosts
    ): User {
        return new User(id, username, password, email, counterComments, counterPosts)
    }

    static random(): User {
        return UserMother.create(
            UserIdMother.random(),
            UserNameMother.random(),
            UserPasswordMother.random(),
            UserEmailMother.random(),
            UserCounterCommentsMother.random(),
            UserCounterPostsMother.random()
        )
    }
}
