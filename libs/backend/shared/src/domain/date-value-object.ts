import { ValueObject } from '@backend/shared/domain/value-object'

export abstract class DateValueObject extends ValueObject<Date> {
    protected constructor(_value: string | number | Date) {
        super(new Date(_value))
    }
}
