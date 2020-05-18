import { StringValueObject } from '@api/shared/domain/string-value-object'

export class GroupDescription extends StringValueObject {
    constructor(value: string) {
        super(value)
    }
}
