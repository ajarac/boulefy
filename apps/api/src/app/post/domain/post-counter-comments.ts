import { NumberValueObject } from '@backend/shared/domain/number-value-object'

export class PostCounterComments extends NumberValueObject {
    constructor(postCounter: number) {
        super(postCounter)
    }
}
