import { AggregateRoot } from '@nestjs/cqrs'
import { UserCreated } from '@backend/shared/domain/user/user-created'

import { UserName } from './user-name'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserCounterPosts } from './user-counter-posts'
import { UserCounterComments } from './user-counter-comments'
import { UserEmail } from './user-email'
import { UserPassword } from './user-password'

export class User extends AggregateRoot {
    constructor(
        private _id: UserId,
        private _username: UserName,
        private _password: UserPassword,
        private _email: UserEmail,
        private _counterComments: UserCounterComments,
        private _counterPosts: UserCounterPosts
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
        const user: User = new User(id, username, password, email, counterComments, counterPosts)

        user.apply(new UserCreated(id.value, username.value, email.value, counterComments.value, counterPosts.value))

        return user
    }
}
