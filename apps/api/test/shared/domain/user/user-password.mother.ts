import { WordMother } from '@api/test/shared/domain/word.mother'
import { UserPassword } from '@api/users/domain/user-password'

export class UserPasswordMother {
    static create(value: string): UserPassword {
        return new UserPassword(value)
    }

    static random(): UserPassword {
        return UserPasswordMother.create(WordMother.random())
    }
}
