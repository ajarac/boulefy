import { NumberMother } from '@backend/shared/test/domain/number.mother';
import { PostRanking } from '@api/post/domain/post-ranking'

export class PostRankingMother {
    static create(value: number): PostRanking {
        return new PostRanking(value);
    }

    static random(): PostRanking {
        return PostRankingMother.create(NumberMother.random());
    }
}
