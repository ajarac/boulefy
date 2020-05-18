import { NumberValueObject } from '@api/shared/domain/number-value-object'

export class PostCounterComments extends NumberValueObject {
    constructor(postCounter: number) {
        super(postCounter)
    }

    static create(): PostCounterComments {
        return new PostCounterComments(0)
    }
}
