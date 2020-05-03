import { PostCounterCommentsMother } from '@forum/test/forum/post/domain/post-counter-comments.mother'
import { PostTitleMother } from '@forum/test/forum/post/domain/post-title.mother'
import { PostRankingMother } from '@forum/test/forum/post/domain/post-ranking.mother'
import { PostIdMother } from '@forum/test/forum/post/domain/post-id.mother'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { CreatePostCommand } from '@forum/../../../../src/forum/post/application/create/create-post-command'
import { PostContentMother } from '@forum/test/forum/post/domain/post-content.mother'
import { PostCounterComments } from '@forum/../../../../src/forum/post/domain/post-counter-comments'
import { PostContent } from '@forum/../../../../src/forum/post/domain/post-content'
import { PostTitle } from '@forum/../../../../src/forum/post/domain/post-title'
import { PostRanking } from '@forum/../../../../src/forum/post/domain/post-ranking'
import { PostId } from '@forum/../../../../src/forum/shared/domain/post-id'
import { Post } from '@forum/../../../../src/forum/post/domain/post'

export class PostMother {
    static create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        userId: UserId
    ): Post {
        return new Post(id, title, content, counterComments, ranking, userId)
    }

    static random(): Post {
        return PostMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostContentMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random(),
            UserIdMother.random()
        )
    }

    static fromRequest(request: CreatePostCommand): Post {
        return PostMother.create(
            PostIdMother.create(request.id),
            PostTitleMother.create(request.title),
            PostContentMother.create(request.content),
            PostCounterCommentsMother.create(0),
            PostRankingMother.create(0),
            UserIdMother.create(request.userId)
        )
    }
}
