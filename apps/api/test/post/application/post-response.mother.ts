import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostContentMother } from '@api/test/post/domain/post-content.mother'
import { PostTitleMother } from '@api/test/post/domain/post-title.mother'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostRankingMother } from '@api/test/post/domain/post-ranking.mother'
import { PostIdMother } from '@api/test/post/domain/post-id.mother'
import { PostContent } from '@api/post/domain/post-content'
import { PostCounterCommentsMother } from '@api/test/post/domain/post-counter-comments.mother'
import { PostResponse } from '@shared/models/post/post.response'
import { UserName } from '@backend/shared/domain/user/user-name'
import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { PostUpdateDate } from '@api/post/domain/post-update-date'
import { UserNameMother } from '@backend/shared/test/domain/user/user-name.mother'
import { PostCreatedDateMother } from '@api/test/post/domain/post-created-date.mother'
import { PostUpdateDateMother } from '@api/test/post/domain/post-update-date.mother'

export class PostResponseMother {
    static create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: UserId,
        username: UserName,
        createdDate: PostCreatedDate,
        updatedDate: PostUpdateDate
    ): PostResponse {
        return {
            id: id.value,
            title: title.value,
            content: content.value,
            counterComments: counterComments.value,
            ranking: ranking.value,
            user: { id: userId.value, username: username.value },
            createdDate: createdDate.value,
            updatedDate: updatedDate.value
        }
    }

    static random(): PostResponse {
        return PostResponseMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostContentMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random(),
            UserIdMother.random(),
            UserNameMother.random(),
            PostCreatedDateMother.random(),
            PostUpdateDateMother.random()
        )
    }
}
