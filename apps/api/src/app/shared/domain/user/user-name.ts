import { StringValueObject } from '@api/shared/domain/string-value-object'

export class UserName extends StringValueObject {
    constructor(username: string) {
        super(username)
    }
}
