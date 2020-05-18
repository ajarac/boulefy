import * as faker from 'faker'
import { UserEmail } from '@api/users/domain/user-email'

export class UserEmailMother {
    static create(value: string): UserEmail {
        return new UserEmail(value)
    }

    static random(): UserEmail {
        return UserEmailMother.create(faker.internet.email())
    }
}
