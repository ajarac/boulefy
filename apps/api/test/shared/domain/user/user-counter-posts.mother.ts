import { NumberMother } from '@api/test/shared/domain/number.mother'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'

export class UserCounterPostsMother {
    static create(value: number): UserCounterPosts {
        return new UserCounterPosts(value)
    }

    static random(): UserCounterPosts {
        return UserCounterPostsMother.create(NumberMother.random())
    }
}
