import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { UserId } from '@api/shared/domain/user/user-id'
import { PostCreatedEvent } from '@api/shared/domain/post/post-created-event'
import { IncrementUserCounterPost } from '@api/users/application/post-created/increment-user-counter-post'

@EventsHandler(PostCreatedEvent)
export class IncrementUserCounterPostOnPostCreatedHandler implements IEventHandler<PostCreatedEvent> {
    constructor(private incrementUserCounterPost: IncrementUserCounterPost) {}

    handle(command: PostCreatedEvent): Promise<void> {
        const id: UserId = new UserId(command.userId)
        return this.incrementUserCounterPost.increment(id)
    }
}
