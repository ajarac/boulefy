import { Post, PostCounterMessages, PostId, PostRanking, PostTitle } from '@forum-api/post/domain';
import { PostCounterMessagesMother } from '@forum-api/test/domain/post-counter-messages.mother';
import { PostTitleMother } from '@forum-api/test/domain/post-title.mother';
import { PostRankingMother } from '@forum-api/test/domain/post-ranking.mother';
import { PostIdMother } from '@forum-api/test/domain/post-id.mother';

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
