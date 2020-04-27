import { PostContent, PostId, PostTitle } from '@forum/post/domain'
import { PostContentMother, PostIdMother, PostTitleMother } from '@forum/test/post/domain'
import { CreatePostCommand } from '@forum/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'

export class CreatePostCommandMother {
    static create(id: PostId, title: PostTitle, content: PostContent, userId: UserId): CreatePostCommand {
        return new CreatePostCommand(id.value, title.value, content.value, userId.value)
    }

    static random(): CreatePostCommand {
        return CreatePostCommandMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostContentMother.random(),
            UserIdMother.random()
        )
    }
}
