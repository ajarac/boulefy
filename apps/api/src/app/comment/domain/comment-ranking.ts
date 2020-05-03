import { NumberValueObject } from '@backend/shared/domain/number-value-object'

export class CommentRanking extends NumberValueObject {
    constructor(ranking: number) {
        super(ranking)
    }
}
