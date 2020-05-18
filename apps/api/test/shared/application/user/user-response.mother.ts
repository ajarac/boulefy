import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { UserNameMother } from '@api/test/shared/domain/user/user-name.mother'
import { UserEmailMother } from '@api/test/shared/domain/user/user-email.mother'
import { UserCounterCommentsMother } from '@api/test/shared/domain/user/user-counter-comments.mother'
import { UserCounterPostsMother } from '@api/test/shared/domain/user/user-counter-posts.mother'
import { UserResponse } from '@shared/models/user/user.response'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'

export class UserResponseMother {
    static create(
        id: UserId,
        username: UserName,
        email: UserEmail,
        counterComments: UserCounterComments,
        counterPosts: UserCounterPosts
    ): UserResponse {
        return {
            id: id.value,
            username: username.value,
            email: email.value,
            counterComments: counterComments.value,
            counterPosts: counterPosts.value
        } as UserResponse
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
