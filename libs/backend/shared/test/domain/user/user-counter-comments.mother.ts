import { UserCounterComments } from '@users/../../../../../../apps/forum/src/users/domain/user-counter-comments'
import { NumberMother } from '@backend/shared/test/domain/number.mother'

export class UserCounterCommentsMother {
    static create(value: number): UserCounterComments {
        return new UserCounterComments(value)
    }

    static random(): UserCounterComments {
        return UserCounterCommentsMother.create(NumberMother.random())
    }
}
