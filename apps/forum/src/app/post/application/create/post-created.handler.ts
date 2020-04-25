import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { environment } from '../../../../environments/environment'

@EventsHandler(PostCreatedEvent)
export class PostCreatedHandler implements IEventHandler<PostCreatedEvent> {
    constructor(@Inject(environment.clientName) private client: ClientProxy) {}

    handle(event: PostCreatedEvent): void {
        this.client.emit('forum.post.post-created', event)
    }
}
