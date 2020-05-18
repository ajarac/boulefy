import { ValueObject } from '@api/shared/domain/value-object'

export abstract class DateValueObject extends ValueObject<Date> {
    protected constructor(value: Date) {
        super(value)
    }
}
