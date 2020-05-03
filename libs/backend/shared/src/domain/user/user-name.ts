import { StringValueObject } from '@backend/shared/domain/string-value-object'

export class UserName extends StringValueObject {
    constructor(username: string) {
        super(username);
    }
}
