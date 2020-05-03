import { StringValueObject } from '@backend/shared/domain/string-value-object'

export class UserEmail extends StringValueObject {
    constructor(email: string) {
        super(email)
    }
}
