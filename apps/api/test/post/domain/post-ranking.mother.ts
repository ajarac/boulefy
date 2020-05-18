import { PostRanking } from '@api/post/domain/post-ranking'
import { NumberMother } from '@api/test/shared/domain/number.mother'

export class PostRankingMother {
    static create(value: number): PostRanking {
        return new PostRanking(value)
    }

    static random(): PostRanking {
        return PostRankingMother.create(NumberMother.random())
    }
}
