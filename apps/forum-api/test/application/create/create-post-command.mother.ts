import { PostId, PostTitle } from '@forum-api/post/domain'
import { PostIdMother, PostTitleMother } from '@forum-api/test/domain'
import { CreatePostCommand } from '@forum-api/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'

export class CreatePostCommandMother {
    static create(id: PostId, title: PostTitle, userId: UserId): CreatePostCommand {
        return new CreatePostCommand(id.value, title.value, userId.value)
    }

    static random(): CreatePostCommand {
        return CreatePostCommandMother.create(PostIdMother.random(), PostTitleMother.random(), UserIdMother.random())
    }
}
