import { CreatePostCommand } from '@forum/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserIdMother } from '@backend/shared/test/domain/user/user-id.mother'
import { PostContentMother } from '@forum/test/post/domain/post-content.mother'
import { PostTitleMother } from '@forum/test/post/domain/post-title.mother'
import { PostIdMother } from '@forum/test/post/domain/post-id.mother'
import { PostContent } from '@forum/post/domain/post-content'
import { PostTitle } from '@forum/post/domain/post-title'
import { PostId } from '@forum/shared/domain/post-id'

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
