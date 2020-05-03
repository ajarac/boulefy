import { CommandHandler, ICommandHandler, QueryBus } from '@nestjs/cqrs'
import { PostCreator } from '@api/post/application/create/post-creator'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post-id'

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
    constructor(private creator: PostCreator, private queryBus: QueryBus) {}

    async execute(command: CreatePostCommand): Promise<void> {
        const id: PostId = new PostId(command.id)
        const title: PostTitle = new PostTitle(command.title)
        const content: PostContent = new PostContent(command.content)
        const counterComments: PostCounterComments = new PostCounterComments(0)
        const ranking: PostRanking = new PostRanking(0)
        const user: UserId = new UserId(command.userId)

        return this.creator.create(id, title, content, counterComments, ranking, user)
    }
}
