import { UserId } from '@backend/shared/domain/user/user-id'
import { IdentifierMother } from '@backend/shared/test/domain/identifier.mother'

export class UserIdMother {
    static create(value: string): UserId {
        return new UserId(value)
    }

    static random(): UserId {
        return UserIdMother.create(IdentifierMother.random())
    }
}
