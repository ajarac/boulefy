import { AggregateRoot } from '@nestjs/cqrs'
import { UserName } from '@users/users/domain/user-name'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCreated } from '@backend/shared/domain/user/user-created'

export class User extends AggregateRoot {
    constructor(
        private _id: UserId,
        private _name: UserName,
        private _counterComments: UserCounterComments,
        private _counterPosts: UserCounterPosts
    ) {
        super()
    }

    get id(): UserId {
        return this._id
    }

    get name(): UserName {
        return this._name
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

    public static create(id: UserId, name: UserName, counterComments: UserCounterComments, counterPosts: UserCounterPosts): User {
        const user: User = new User(id, name, counterComments, counterPosts)

        user.apply(new UserCreated(id.value, name.value, counterComments.value, counterPosts.value))

        return user
    }
}
