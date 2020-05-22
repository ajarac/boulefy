import { CreatePostCommand } from '@api/post/application/create/create-post-command'
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
import { Post } from '@api/post/domain/post'
import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { PostUpdateDate } from '@api/post/domain/post-update-date'
import { PostUpdateDateMother } from '@api/test/post/domain/post-update-date.mother'
import { PostCreatedDateMother } from '@api/test/post/domain/post-created-date.mother'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { GroupId } from '@api/shared/domain/group/group-id'
import { GroupIdMother } from '@api/test/shared/domain/group/group-id.mother'

export class PostMother {
    static create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: UserId,
        groupId: GroupId,
        createdDate: PostCreatedDate,
        updatedDate: PostUpdateDate
    ): Post {
        return new Post(id, title, content, counterComments, ranking, userId, groupId, createdDate, updatedDate)
    }

    static random(): Post {
        return PostMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostContentMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random(),
            UserIdMother.random(),
            GroupIdMother.random(),
            PostCreatedDateMother.random(),
            PostUpdateDateMother.random()
        )
    }

    static fromRequest(request: CreatePostCommand): Post {
        return PostMother.create(
            PostIdMother.create(request.id),
            PostTitleMother.create(request.title),
            PostContentMother.create(request.content),
            PostCounterCommentsMother.create(0),
            PostRankingMother.create(0),
            UserIdMother.create(request.userId),
            GroupIdMother.create(request.groupId),
            PostCreatedDateMother.create(new Date()),
            PostUpdateDateMother.create(new Date())
        )
    }
}
