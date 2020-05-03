import { ValueObject } from '@backend/shared/domain/value-object'

export abstract class StringValueObject extends ValueObject<string> {
    protected constructor(protected readonly _value: string) {
        super(_value)
    }
}
