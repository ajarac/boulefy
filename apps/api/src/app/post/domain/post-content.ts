import { StringValueObject } from '@api/shared/domain/string-value-object'

export class PostContent extends StringValueObject {
    constructor(content: string) {
        super(content)
    }
}
