import { DateValueObject } from '@api/shared/domain/date-value-object'

export class GroupCreatedDate extends DateValueObject {
    constructor(value: Date) {
        super(value)
    }

    static create(): GroupCreatedDate {
        return new GroupCreatedDate(new Date())
    }
}
