import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { IncrementUserCounterCommentOnCommentCreateCommand } from '@users/users/application/comment-created/increment-user-counter-comment-on-comment-create-command'
import { IncrementUserCounterComment } from '@users/users/application/comment-created/increment-user-counter-comment'
import { UserId } from '@backend/shared/domain/user/user-id'

@CommandHandler(IncrementUserCounterCommentOnCommentCreateCommand)
export class IncrementUserCounterCommentOnCommentCreateCommandHandler
    implements ICommandHandler<IncrementUserCounterCommentOnCommentCreateCommand> {
    constructor(private incrementUserCounterComment: IncrementUserCounterComment) {}

    execute(command: IncrementUserCounterCommentOnCommentCreateCommand): Promise<void> {
        const userId: UserId = new UserId(command.id)
        return this.incrementUserCounterComment.increment(userId)
    }
}
