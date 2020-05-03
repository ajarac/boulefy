import { PostContentMother } from '@api/test/forum/post/domain/post-content.mother'
import { CreatePostCommand } from '@api/forum/post/application/create/create-post-command'
import { PostTitleMother } from '@api/test/forum/post/domain/post-title.mother'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostIdMother } from '@api/test/forum/post/domain/post-id.mother'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostId } from '@api/forum/shared/domain/post-id'
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
