import { IncrementUserCounterPost } from './increment-user-counter-post'
import { UserId } from '@backend/shared/domain/user/user-id'
import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'

@EventsHandler(PostCreatedEvent)
export class IncrementUserCounterPostOnPostCreatedHandler implements IEventHandler<PostCreatedEvent> {
    constructor(private incrementUserCounterPost: IncrementUserCounterPost) {}

    handle(command: PostCreatedEvent): Promise<void> {
        const id: UserId = new UserId(command.userId)
        return this.incrementUserCounterPost.increment(id)
    }
}
