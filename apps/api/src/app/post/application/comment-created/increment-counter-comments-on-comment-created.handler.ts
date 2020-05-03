import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'
import { IncrementCounterComment } from '@api/post/application/comment-created/increment-counter-comment'
import { PostId } from '@api/shared/domain/post-id'

@EventsHandler(CommentCreatedEvent)
export class IncrementCounterCommentsOnCommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
    constructor(private incrementCounterComment: IncrementCounterComment) {}

    async handle(event: CommentCreatedEvent): Promise<void> {
        const postId: PostId = new PostId(event.postId)
        return this.incrementCounterComment.increment(postId)
    }
}
