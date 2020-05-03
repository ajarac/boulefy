import { CreatePostCommand } from '@api/forum/post/application/create/create-post-command'
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
import { Post } from '@api/forum/post/domain/post'


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
