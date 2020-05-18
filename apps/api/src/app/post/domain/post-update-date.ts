import { DateValueObject } from '@api/shared/domain/date-value-object'

export class PostUpdateDate extends DateValueObject {
    constructor(value: Date) {
        super(value)
    }

    update(): PostUpdateDate {
        return new PostUpdateDate(new Date())
    }

    static create(): PostUpdateDate {
        return new PostUpdateDate(new Date())
    }
}
