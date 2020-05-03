import { NumberValueObject } from '@backend/shared/domain/number-value-object'

export class PostRanking extends NumberValueObject {
    constructor(ranking: number) {
        super(ranking)
    }
}
