import { NumberValueObject } from '@api/shared/domain/number-value-object'

export class GroupCounterUsers extends NumberValueObject {
    constructor(value: number) {
        super(value)
    }
}
