import { StringValueObject } from '@backend/shared/domain/string-value-object'

export class CommentContent extends StringValueObject {
    constructor(content: string) {
        super(content)
    }
}
