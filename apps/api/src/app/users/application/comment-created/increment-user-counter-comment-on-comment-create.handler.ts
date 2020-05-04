import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { IncrementUserCounterComment } from './increment-user-counter-comment'
import { UserId } from '@backend/shared/domain/user/user-id'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'

@EventsHandler(CommentCreatedEvent)
export class IncrementUserCounterCommentOnCommentCreateHandler implements IEventHandler<CommentCreatedEvent> {
    constructor(private incrementUserCounterComment: IncrementUserCounterComment) {}

    handle(command: CommentCreatedEvent): Promise<void> {
        const userId: UserId = new UserId(command.userId)
        return this.incrementUserCounterComment.increment(userId)
    }
}
