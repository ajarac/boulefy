import { DateValueObject } from '@api/shared/domain/date-value-object'

export class PostCreatedDate extends DateValueObject {
    constructor(value: Date) {
        super(value)
    }

    static create(): PostCreatedDate {
        return new PostCreatedDate(new Date())
    }
}
