import { NumberValueObject } from '@api/shared/domain/number-value-object'

export class CommentRanking extends NumberValueObject {
    constructor(ranking: number) {
        super(ranking)
    }

    static create(): CommentRanking {
        return new CommentRanking(0)
    }
}
