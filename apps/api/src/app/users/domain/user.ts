import { AggregateRoot } from '@nestjs/cqrs'
import { UserCreatedDate } from '@api/users/domain/user-created-date'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserPassword } from '@api/users/domain/user-password'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'
import { UserCreatedEvent } from '@api/shared/domain/user/user-created-event'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'

export class User extends AggregateRoot {
    constructor(
        private _id: UserId,
        private _username: UserName,
        private _password: UserPassword,
        private _email: UserEmail,
        private _counterComments: UserCounterComments,
        private _counterPosts: UserCounterPosts,
        private _createdDate: UserCreatedDate
    ) {
        super()
    }

    get id(): UserId {
        return this._id
    }

    get username(): UserName {
        return this._username
    }

    get password(): UserPassword {
        return this._password
    }

    get email(): UserEmail {
        return this._email
    }

    get counterComments(): UserCounterComments {
        return this._counterComments
    }

    get counterPosts(): UserCounterPosts {
        return this._counterPosts
    }

    get createdDate(): UserCreatedDate {
        return this._createdDate
    }

    incrementCounterPost(): void {
        this._counterPosts = new UserCounterPosts(this._counterPosts.value + 1)
    }

    incrementCounterComments(): void {
        this._counterComments = new UserCounterComments(this._counterComments.value + 1)
    }

    public static create(
        id: UserId,
        username: UserName,
        password: UserPassword,
        email: UserEmail,
        counterComments: UserCounterComments,
        counterPosts: UserCounterPosts
    ): User {
        const createdDate: UserCreatedDate = UserCreatedDate.create()
        const user: User = new User(id, username, password, email, counterComments, counterPosts, createdDate)

        user.apply(new UserCreatedEvent(id.value, username.value, email.value, counterComments.value, counterPosts.value, createdDate.value))

        return user
    }
}
