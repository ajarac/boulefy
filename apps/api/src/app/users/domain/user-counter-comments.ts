import { NumberValueObject } from '@api/shared/domain/number-value-object'

export class UserCounterComments extends NumberValueObject {
    constructor(counterComments: number) {
        super(counterComments)
    }
}
