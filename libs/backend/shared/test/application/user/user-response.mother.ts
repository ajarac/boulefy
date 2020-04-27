import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserEmail } from '@users/users/domain/user-email'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'
import { UserResponse } from '@users/users/application/user.response'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { UserNameMother } from '@backend/shared/test/domain/user/user-name.mother'
import { UserEmailMother } from '@backend/shared/test/domain/user/user-email.mother'
import { UserCounterCommentsMother } from '@backend/shared/test/domain/user/user-counter-comments.mother'
import { UserCounterPostsMother } from '@backend/shared/test/domain/user/user-counter-posts.mother'

export class UserResponseMother {
    static create(
        id: UserId,
        username: UserName,
        email: UserEmail,
        counterComments: UserCounterComments,
        counterPosts: UserCounterPosts
    ): UserResponse {
        return new UserResponse(id.value, username.value, email.value, counterComments.value, counterPosts.value)
    }

    static random(): UserResponse {
        return UserResponseMother.create(
            UserIdMother.random(),
            UserNameMother.random(),
            UserEmailMother.random(),
            UserCounterCommentsMother.random(),
            UserCounterPostsMother.random()
        )
    }
}
