import { Post, PostCounterComments, PostId, PostRanking, PostTitle } from '@forum-api/post/domain'
import { PostCounterCommentsMother } from '@forum-api/test/domain/post-counter-comments.mother'
import { PostTitleMother } from '@forum-api/test/domain/post-title.mother'
import { PostRankingMother } from '@forum-api/test/domain/post-ranking.mother'
import { PostIdMother } from '@forum-api/test/domain/post-id.mother'

export class PostMother {
    static create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking): Post {
        return new Post(id, title, counterComments, ranking)
    }

    static random(): Post {
        return PostMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random()
        )
    }
}
