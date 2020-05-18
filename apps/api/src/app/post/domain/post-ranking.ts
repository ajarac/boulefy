import { NumberValueObject } from '@api/shared/domain/number-value-object'

export class PostRanking extends NumberValueObject {
    constructor(ranking: number) {
        super(ranking)
    }

    static create(): PostRanking {
        return new PostRanking(0)
    }
}
