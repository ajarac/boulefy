import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { PostCreatedEvent } from '@api/shared/domain/post/post-created-event'
import { IncrementCounterPost } from '@api/group/application/post-created/increment-counter-post'
import { GroupId } from '@api/shared/domain/group/group-id'

@EventsHandler(PostCreatedEvent)
export class IncrementCounterPostOnPostCreatedHandler implements IEventHandler<PostCreatedEvent> {
    constructor(private incrementCounterPost: IncrementCounterPost) {}

    async handle(event: PostCreatedEvent): Promise<void> {
        const groupId: GroupId = new GroupId(event.groupId)
        return this.incrementCounterPost.increment(groupId)
    }
}
