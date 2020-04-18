import { User } from '@users/users/domain/user'

export class UserResponse {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly counterComments: number,
        public readonly counterPosts: number
    ) {}

    static fromAggregate(user: User): UserResponse {
        return new UserResponse(user.id.value, user.name.value, user.email.value, user.counterComments.value, user.counterPosts.value)
    }
}
