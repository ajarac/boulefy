import { DateValueObject } from '@backend/shared/domain/date-value-object'

export class CommentCreatedDate extends DateValueObject {
    constructor(value: Date) {
        super(value)
    }

    static create(): CommentCreatedDate {
        return new CommentCreatedDate(new Date())
    }
}
