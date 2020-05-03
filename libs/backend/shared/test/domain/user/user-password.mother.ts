import { UserPassword } from '@users/../../../../../../apps/forum/src/users/domain/user-password'
import { WordMother } from '@backend/shared/test/domain/word.mother'

export class UserPasswordMother {
    static create(value: string): UserPassword {
        return new UserPassword(value)
    }

    static random(): UserPassword {
        return UserPasswordMother.create(WordMother.random())
    }
}
