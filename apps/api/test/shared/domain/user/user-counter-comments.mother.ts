import { NumberMother } from '@api/test/shared/domain/number.mother'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'

export class UserCounterCommentsMother {
    static create(value: number): UserCounterComments {
        return new UserCounterComments(value)
    }

    static random(): UserCounterComments {
        return UserCounterCommentsMother.create(NumberMother.random())
    }
}
