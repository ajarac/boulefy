import { WordMother } from '@api/test/shared/domain/word.mother'
import { UserName } from '@api/shared/domain/user/user-name'

export class UserNameMother {
    static create(value: string): UserName {
        return new UserName(value)
    }

    static random(): UserName {
        return UserNameMother.create(WordMother.random())
    }
}
