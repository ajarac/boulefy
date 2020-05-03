import { Controller } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { EventPattern } from '@nestjs/microservices'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'
import { IncrementUserCounterCommentOnCommentCreateCommand } from '@users/users/application/comment-created/increment-user-counter-comment-on-comment-create-command'

@Controller()
export class CommentCreatedController {
    constructor(private commandBus: CommandBus) {}

    @EventPattern('forum.comment.comment-created')
    commentCreated({ userId }: CommentCreatedEvent): Promise<void> {
        return this.commandBus.execute(new IncrementUserCounterCommentOnCommentCreateCommand(userId))
    }
}
