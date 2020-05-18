import { StringValueObject } from '@api/shared/domain/string-value-object'

export class PostTitle extends StringValueObject {
    constructor(title: string) {
        super(title)
    }
}
