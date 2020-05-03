import * as faker from 'faker'
import { UserEmail } from '@users/../../../../../../apps/forum/src/users/domain/user-email'

export class UserEmailMother {
    static create(value: string): UserEmail {
        return new UserEmail(value)
    }

    static random(): UserEmail {
        return UserEmailMother.create(faker.internet.email())
    }
}
