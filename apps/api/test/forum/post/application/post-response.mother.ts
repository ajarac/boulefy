import { UserId } from '@backend/shared/domain/user/user-id'
import { PostResponse } from '@forum/../../../../src/forum/post/application/post.response'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostContentMother } from '@forum/test/forum/post/domain/post-content.mother'
import { PostTitleMother } from '@forum/test/forum/post/domain/post-title.mother'
import { PostRankingMother } from '@forum/test/forum/post/domain/post-ranking.mother'
import { PostIdMother } from '@forum/test/forum/post/domain/post-id.mother'
import { PostCounterComments } from '@forum/../../../../src/forum/post/domain/post-counter-comments'
import { PostContent } from '@forum/../../../../src/forum/post/domain/post-content'
import { PostTitle } from '@forum/../../../../src/forum/post/domain/post-title'
import { PostRanking } from '@forum/../../../../src/forum/post/domain/post-ranking'
import { PostCounterCommentsMother } from '@forum/test/forum/post/domain/post-counter-comments.mother'
import { PostId } from '@forum/../../../../src/forum/shared/domain/post-id'

export class PostResponseMother {
    static create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: UserId
    ): PostResponse {
        return new PostResponse(id.value, title.value, content.value, counterComments.value, ranking.value, userId.value)
    }

    static random(): PostResponse {
        return PostResponseMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostContentMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random(),
            UserIdMother.random()
        )
    }
}
