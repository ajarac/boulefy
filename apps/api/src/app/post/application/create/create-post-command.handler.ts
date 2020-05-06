import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { PostCreator } from '@api/post/application/create/post-creator'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostId } from '@api/shared/domain/post-id'

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
    constructor(private creator: PostCreator) {}

    async execute(command: CreatePostCommand): Promise<void> {
        const id: PostId = new PostId(command.id)
        const title: PostTitle = new PostTitle(command.title)
        const content: PostContent = new PostContent(command.content)
        const user: UserId = new UserId(command.userId)

        return this.creator.create(id, title, content, user)
    }
}
