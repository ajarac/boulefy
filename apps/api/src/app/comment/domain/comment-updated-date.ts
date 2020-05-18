import { DateValueObject } from '@api/shared/domain/date-value-object'

export class CommentUpdatedDate extends DateValueObject {
    constructor(value: Date) {
        super(value)
    }

    update(): CommentUpdatedDate {
        return new CommentUpdatedDate(new Date())
    }

    static create(): CommentUpdatedDate {
        return new CommentUpdatedDate(new Date())
    }
}
