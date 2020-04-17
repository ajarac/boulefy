import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@EventsHandler(PostCreatedEvent)
export class PostCreatedHandler implements IEventHandler<PostCreatedEvent> {
    constructor(@Inject('FORUM_SERVICES') private client: ClientProxy) {}

    handle(event: PostCreatedEvent): void {
        this.client.emit('forum-api.post.post-created', event)
    }
}
