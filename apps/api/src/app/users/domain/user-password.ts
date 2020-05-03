import { StringValueObject } from '@backend/shared/domain/string-value-object'

export class UserPassword extends StringValueObject {
    constructor(password: string) {
        super(password)
    }
}
