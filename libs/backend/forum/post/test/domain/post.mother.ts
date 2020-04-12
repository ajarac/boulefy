import { Post, PostCounterMessages, PostId, PostRanking, PostTitle } from '../../src/domain';
import { PostIdMother } from './post-id.mother';
import { PostTitleMother } from './post-title.mother';
import { PostCounterMessagesMother } from './post-counter-messages.mother';
import { PostRankingMother } from './post-ranking.mother';

export class PostMother {
    static create(id: PostId, title: PostTitle, counterMessages: PostCounterMessages, ranking: PostRanking): Post {
        return new Post(id, title, counterMessages, ranking);
    }

    static random(): Post {
        return PostMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostCounterMessagesMother.random(),
            PostRankingMother.random()
        );
    }
}
