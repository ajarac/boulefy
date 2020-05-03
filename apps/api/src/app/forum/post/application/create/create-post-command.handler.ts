import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { PostCreator } from '@api/forum/post/application/create/post-creator'
import { CreatePostCommand } from '@api/forum/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
    constructor(private creator: PostCreator) {}

    async execute(command: CreatePostCommand): Promise<void> {
        const id: PostId = new PostId(command.id)
        const title: PostTitle = new PostTitle(command.title)
        const content: PostContent = new PostContent(command.content)
        const counterComments: PostCounterComments = new PostCounterComments(0)
        const ranking: PostRanking = new PostRanking(0)
        const userId: UserId = new UserId(command.userId)

        return this.creator.create(id, title, content, counterComments, ranking, userId)
    }
}
