import { Post, PostCounterComments, PostId, PostRanking, PostTitle } from '@forum/post/domain'
import { PostCounterCommentsMother } from '@forum/test/domain/post-counter-comments.mother'
import { PostTitleMother } from '@forum/test/domain/post-title.mother'
import { PostRankingMother } from '@forum/test/domain/post-ranking.mother'
import { PostIdMother } from '@forum/test/domain/post-id.mother'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'

export class PostMother {
    static create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking, userId: UserId): Post {
        return new Post(id, title, counterComments, ranking, userId)
    }

    static random(): Post {
        return PostMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random(),
            UserIdMother.random()
        )
    }
}
