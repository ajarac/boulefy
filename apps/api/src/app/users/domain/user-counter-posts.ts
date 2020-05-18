import { NumberValueObject } from '@api/shared/domain/number-value-object'

export class UserCounterPosts extends NumberValueObject {
    constructor(counterPosts: number) {
        super(counterPosts)
    }
}
