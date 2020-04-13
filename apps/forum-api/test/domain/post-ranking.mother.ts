import { PostRanking } from '@forum-api/post/domain';
import { NumberMother } from '@backend/shared/test/domain/number.mother';

export class PostRankingMother {
    static create(value: number): PostRanking {
        return new PostRanking(value);
    }

    static random(): PostRanking {
        return PostRankingMother.create(NumberMother.random());
    }
}
