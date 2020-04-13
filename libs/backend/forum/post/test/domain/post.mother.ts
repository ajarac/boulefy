import { Post, PostCounterMessages, PostId, PostRanking, PostTitle } from '@backend/forum/post/domain';
import { PostCounterMessagesMother } from '@backend/forum/post/test/domain/post-counter-messages.mother';
import { PostTitleMother } from '@backend/forum/post/test/domain/post-title.mother';
import { PostRankingMother } from '@backend/forum/post/test/domain/post-ranking.mother';
import { PostIdMother } from '@backend/forum/post/test/domain/post-id.mother';

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
