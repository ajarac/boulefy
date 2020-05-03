import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostContentMother } from '@api/test/forum/post/domain/post-content.mother'
import { PostTitleMother } from '@api/test/forum/post/domain/post-title.mother'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostRankingMother } from '@api/test/forum/post/domain/post-ranking.mother'
import { PostIdMother } from '@api/test/forum/post/domain/post-id.mother'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostCounterCommentsMother } from '@api/test/forum/post/domain/post-counter-comments.mother'
import { PostResponse } from '@api/forum/post/application/post.response'


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
