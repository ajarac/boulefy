import { PostContent, PostCounterComments, PostId, PostRanking, PostTitle } from '@forum/post/domain'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostResponse } from '@forum/post/application/post.response'
import { PostContentMother, PostCounterCommentsMother, PostIdMother, PostRankingMother, PostTitleMother } from '@forum/test/post/domain'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'

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
