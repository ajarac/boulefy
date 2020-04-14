import { PostCounterComments, PostId, PostRanking, PostTitle } from '@forum-api/post/domain'
import { PostCounterCommentsMother, PostIdMother, PostRankingMother, PostTitleMother } from '@forum-api/test/domain'
import { CreatePostCommand } from '@forum-api/post/application/create/create-post-command'

export class CreatePostCommandMother {
    static create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking): CreatePostCommand {
        return new CreatePostCommand(id.value, title.value, counterComments.value, ranking.value)
    }

    static random(): CreatePostCommand {
        return CreatePostCommandMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostCounterCommentsMother.random(),
            PostRankingMother.random()
        )
    }
}
