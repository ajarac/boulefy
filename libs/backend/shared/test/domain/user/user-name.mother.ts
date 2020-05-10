import { WordMother } from '@backend/shared/test/domain/word.mother'
import { UserName } from '@backend/shared/domain/user/user-name'

export class UserNameMother {
    static create(value: string): UserName {
        return new UserName(value)
    }

    static random(): UserName {
        return UserNameMother.create(WordMother.random())
    }
}
