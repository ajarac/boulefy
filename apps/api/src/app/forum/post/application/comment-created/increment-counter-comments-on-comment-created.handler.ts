import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { IncrementCounterComment } from './increment-counter-comment'
import { PostId } from '../../../shared/domain/post-id'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'

@EventsHandler(CommentCreatedEvent)
export class IncrementCounterCommentsOnCommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
    constructor(private incrementCounterComment: IncrementCounterComment) {}

    async handle(event: CommentCreatedEvent): Promise<void> {
        const postId: PostId = new PostId(event.postId)
        return this.incrementCounterComment.increment(postId)
    }
}
