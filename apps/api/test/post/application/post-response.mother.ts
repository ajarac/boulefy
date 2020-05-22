import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post/post-id'
import { PostContentMother } from '@api/test/post/domain/post-content.mother'
import { PostTitleMother } from '@api/test/post/domain/post-title.mother'
import { PostRankingMother } from '@api/test/post/domain/post-ranking.mother'
import { PostIdMother } from '@api/test/shared/domain/post/post-id.mother'
import { PostContent } from '@api/post/domain/post-content'
import { PostCounterCommentsMother } from '@api/test/post/domain/post-counter-comments.mother'
import { PostResponse, PostUserResponse } from '@shared/models/post/post.response'
import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { PostUpdateDate } from '@api/post/domain/post-update-date'
import { PostCreatedDateMother } from '@api/test/post/domain/post-created-date.mother'
import { PostUpdateDateMother } from '@api/test/post/domain/post-update-date.mother'
import { UserNameMother } from '@api/test/shared/domain/user/user-name.mother'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { Post } from '@api/post/domain/post'
import { from } from 'uuid-mongodb'

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
            createdDate: createdDate.value.toISOString(),
            updatedDate: updatedDate.value.toISOString()
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

    static fromAggregate(post: Post, user: PostUserResponse): PostResponse {
        return {
            id: from(post.id.value).toString(),
            title: post.title.value,
            content: post.content.value,
            counterComments: post.counterComments.value,
            ranking: post.ranking.value,
            user,
            createdDate: post.createdDate.value.toISOString(),
            updatedDate: post.updateDate.value.toISOString()
        }
    }
}
