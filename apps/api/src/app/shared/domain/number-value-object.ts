import { ValueObject } from '@api/shared/domain/value-object'

export abstract class NumberValueObject extends ValueObject<number> {
    protected constructor(_value: number) {
        super(_value)
    }
}
