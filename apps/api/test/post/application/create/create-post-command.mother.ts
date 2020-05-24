import { PostContentMother } from '@api/test/post/domain/post-content.mother'
import { CreatePostCommand, CreatePostCommandArgs } from '@api/post/application/create/create-post-command'
import { PostTitleMother } from '@api/test/post/domain/post-title.mother'
import { PostIdMother } from '@api/test/shared/domain/post/post-id.mother'
import { UserIdMother } from '@api/test/shared/domain/user/user-id.mother'
import { GroupIdMother } from '@api/test/shared/domain/group/group-id.mother'

export class CreatePostCommandMother {
    static create(createPostCommandArgs: CreatePostCommandArgs): CreatePostCommand {
        return new CreatePostCommand(createPostCommandArgs)
    }

    static random(createPostCommandArgs: Partial<CreatePostCommandArgs> = {}): CreatePostCommand {
        return CreatePostCommandMother.create({
            id: createPostCommandArgs.id || PostIdMother.random().value,
            title: createPostCommandArgs.title || PostTitleMother.random().value,
            content: createPostCommandArgs.content || PostContentMother.random().value,
            userId: createPostCommandArgs.userId || UserIdMother.random().value,
            groupId: createPostCommandArgs.groupId || GroupIdMother.random().value
        })
    }
}
