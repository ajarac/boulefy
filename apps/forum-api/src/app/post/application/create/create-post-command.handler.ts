import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'

import { PostCounterComments, PostId, PostRanking, PostTitle } from '@forum-api/post/domain'
import { PostCreator } from '@forum-api/post/application/create/post-creator'
import { CreatePostCommand } from '@forum-api/post/application/create/create-post-command'
import { UserId } from '@backend/shared/domain/user/user-id'

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
    constructor(private creator: PostCreator) {}

    async execute(command: CreatePostCommand): Promise<void> {
        const id: PostId = new PostId(command.id)
        const title: PostTitle = new PostTitle(command.title)
        const counterComments: PostCounterComments = new PostCounterComments(0)
        const ranking: PostRanking = new PostRanking(0)
        const userId: UserId = new UserId(command.userId)

        return this.creator.create(id, title, counterComments, ranking, userId)
    }
}
