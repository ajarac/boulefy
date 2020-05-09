import { UserResponse } from '@shared/models/user/user.response'
import { User } from '@api/users/domain/user'

export class UserResponseMapper {
    static fromAggregate(user: User): UserResponse {
        return {
            id: user.id.value,
            username: user.username.value,
            email: user.email.value,
            counterComments: user.counterComments.value,
            counterPosts: user.counterPosts.value,
            createdDate: user.createdDate.value
        }
    }
}
