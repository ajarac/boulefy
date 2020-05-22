import { PostContentMother } from '@api/test/post/domain/post-content.mother'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { PostTitleMother } from '@api/test/post/domain/post-title.mother'
import { PostIdMother } from '@api/test/shared/domain/post/post-id.mother'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostId } from '@api/shared/domain/post/post-id'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { GroupId } from '@api/shared/domain/group/group-id'
import { GroupIdMother } from '@api/test/shared/domain/group/group-id.mother'

export class CreatePostCommandMother {
    static create(id: PostId, title: PostTitle, content: PostContent, userId: UserId, groupId: GroupId): CreatePostCommand {
        return new CreatePostCommand(id.value, title.value, content.value, userId.value, groupId.value)
    }

    static random(): CreatePostCommand {
        return CreatePostCommandMother.create(
            PostIdMother.random(),
            PostTitleMother.random(),
            PostContentMother.random(),
            UserIdMother.random(),
            GroupIdMother.random()
        )
    }
}
