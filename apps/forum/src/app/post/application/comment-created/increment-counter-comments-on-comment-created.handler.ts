import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { IncrementCounterComment } from '@forum/post/application/comment-created/increment-counter-comment'
import { PostId } from '@forum/shared/domain/post-id'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'

@EventsHandler(CommentCreatedEvent)
export class IncrementCounterCommentsOnCommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
    constructor(private incrementCounterComment: IncrementCounterComment) {}

    async handle(event: CommentCreatedEvent): Promise<void> {
        const postId: PostId = new PostId(event.postId)
        return this.incrementCounterComment.increment(postId)
    }
}
