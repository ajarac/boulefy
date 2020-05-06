import { ValueObject } from '@backend/shared/domain/value-object'

export abstract class DateValueObject extends ValueObject<Date> {
    protected constructor(value: Date) {
        super(value)
    }
}
