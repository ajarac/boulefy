import { ValueObject } from '@api/shared/domain/value-object'

export abstract class StringValueObject extends ValueObject<string> {
    protected constructor(protected readonly _value: string) {
        super(_value)
    }
}
