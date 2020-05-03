import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

import { environment } from '../../../../environments/environment'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'

@EventsHandler(CommentCreatedEvent)
export class CommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
    constructor(@Inject(environment.clientName) private client: ClientProxy) {}

    handle(event: CommentCreatedEvent): void {
        this.client.emit('forum.comment.comment-created', event)
    }
}
