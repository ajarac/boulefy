import { StringValueObject } from '@api/shared/domain/string-value-object'

export class GroupName extends StringValueObject {
    constructor(value: string) {
        super(value)
    }
}
