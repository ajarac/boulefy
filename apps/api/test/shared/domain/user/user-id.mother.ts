import { IdentifierMother } from '@api/test/shared/domain/identifier.mother'
import { UserId } from '@api/shared/domain/user/user-id'

export class UserIdMother {
    static create(value: string): UserId {
        return new UserId(value)
    }

    static random(): UserId {
        return UserIdMother.create(IdentifierMother.random())
    }
}
