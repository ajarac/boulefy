import { UserName } from '@users/../../../../../../apps/forum/src/users/domain/user-name'
import { WordMother } from '@backend/shared/test/domain/word.mother'

export class UserNameMother {
    static create(value: string): UserName {
        return new UserName(value)
    }

    static random(): UserName {
        return UserNameMother.create(WordMother.random())
    }
}
