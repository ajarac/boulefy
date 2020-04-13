import { NumberMother } from '@backend/stared/test/domain/number.mother';
import { PostRanking } from '@backend/forum/post/domain';

export class PostRankingMother {
    static create(value: number): PostRanking {
        return new PostRanking(value);
    }

    static random(): PostRanking {
        return PostRankingMother.create(NumberMother.random());
    }
}
