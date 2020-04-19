import { Post, PostCounterComments, PostId, PostRanking, PostTitle } from '@forum/post/domain'
import { PostCounterCommentsMother } from '@forum/test/post/domain/post-counter-comments.mother'
import { PostTitleMother } from '@forum/test/post/domain/post-title.mother'
import { PostRankingMother } from '@forum/test/post/domain/post-ranking.mother'
import { PostIdMother } from '@forum/test/post/domain/post-id.mother'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { CreatePostCommand } from '@forum/post/application/create/create-post-command'

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

    static fromRequest(request: CreatePostCommand): Post {
        return PostMother.create(
            PostIdMother.create(request.id),
            PostTitleMother.create(request.title),
            PostCounterCommentsMother.create(0),
            PostRankingMother.create(0),
            UserIdMother.create(request.userId)
        )
    }
}
