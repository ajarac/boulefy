import { DateValueObject } from '@api/shared/domain/date-value-object'

export class UserCreatedDate extends DateValueObject {
    constructor(value: Date) {
        super(value)
    }

    static create(): UserCreatedDate {
        return new UserCreatedDate(new Date())
    }
}
