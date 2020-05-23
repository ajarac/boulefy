import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { PostContentMother } from '@api/test/post/domain/post-content.mother'
import { PostTitleMother } from '@api/test/post/domain/post-title.mother'
import { PostRankingMother } from '@api/test/post/domain/post-ranking.mother'
import { PostIdMother } from '@api/test/shared/domain/post/post-id.mother'
import { PostCounterCommentsMother } from '@api/test/post/domain/post-counter-comments.mother'
import { Post, PostArgs } from '@api/post/domain/post'
import { PostUpdateDateMother } from '@api/test/post/domain/post-update-date.mother'
import { PostCreatedDateMother } from '@api/test/post/domain/post-created-date.mother'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { GroupIdMother } from '@api/test/shared/domain/group/group-id.mother'

export class PostMother {
    static create(postArgs: PostArgs): Post {
        return new Post(postArgs)
    }

    static random(postArgs: Partial<PostArgs> = {}): Post {
        return PostMother.create({
            id: postArgs.id || PostIdMother.random(),
            title: postArgs.title || PostTitleMother.random(),
            content: postArgs.content || PostContentMother.random(),
            counterComments: postArgs.counterComments || PostCounterCommentsMother.random(),
            ranking: postArgs.ranking || PostRankingMother.random(),
            userId: postArgs.userId || UserIdMother.random(),
            groupId: postArgs.groupId || GroupIdMother.random(),
            createdDate: postArgs.createdDate || PostCreatedDateMother.random(),
            updatedDate: postArgs.updatedDate || PostUpdateDateMother.random()
        })
    }

    static fromRequest(request: CreatePostCommand): Post {
        return PostMother.create({
            id: PostIdMother.create(request.id),
            title: PostTitleMother.create(request.title),
            content: PostContentMother.create(request.content),
            counterComments: PostCounterCommentsMother.create(0),
            ranking: PostRankingMother.create(0),
            userId: UserIdMother.create(request.userId),
            groupId: GroupIdMother.create(request.groupId),
            createdDate: PostCreatedDateMother.create(new Date()),
            updatedDate: PostUpdateDateMother.create(new Date())
        })
    }
}
