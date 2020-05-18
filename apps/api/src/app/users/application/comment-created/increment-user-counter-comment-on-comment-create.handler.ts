import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { CommentCreatedEvent } from '@api/shared/domain/comment/comment-created-event'
import { UserId } from '@api/shared/domain/user/user-id'
import { IncrementUserCounterComment } from '@api/users/application/comment-created/increment-user-counter-comment'

@EventsHandler(CommentCreatedEvent)
export class IncrementUserCounterCommentOnCommentCreateHandler implements IEventHandler<CommentCreatedEvent> {
    constructor(private incrementUserCounterComment: IncrementUserCounterComment) {}

    handle(command: CommentCreatedEvent): Promise<void> {
        const userId: UserId = new UserId(command.userId)
        return this.incrementUserCounterComment.increment(userId)
    }
}
