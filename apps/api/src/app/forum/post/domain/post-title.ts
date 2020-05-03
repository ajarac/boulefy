import { StringValueObject } from '@backend/shared/domain/string-value-object'

export class PostTitle extends StringValueObject {
    constructor(title: string) {
        super(title)
    }
}
