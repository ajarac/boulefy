import { StringValueObject } from '@api/shared/domain/string-value-object'

export class CommentContent extends StringValueObject {
    constructor(content: string) {
        super(content)
    }
}
