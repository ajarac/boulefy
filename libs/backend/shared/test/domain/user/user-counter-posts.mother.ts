import { UserCounterPosts } from '@users/../../../../../../apps/forum/src/users/domain/user-counter-posts'
import { NumberMother } from '@backend/shared/test/domain/number.mother'

export class UserCounterPostsMother {
    static create(value: number): UserCounterPosts {
        return new UserCounterPosts(value)
    }

    static random(): UserCounterPosts {
        return UserCounterPostsMother.create(NumberMother.random())
    }
}
