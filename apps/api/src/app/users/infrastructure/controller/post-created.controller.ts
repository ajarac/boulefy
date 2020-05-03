import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { CommandBus } from '@nestjs/cqrs'
import { IncrementUserCounterPostOnPostCreatedCommand } from '../../application/post-created/increment-user-counter-post-on-post-created-command'

@Controller()
export class PostCreatedController {
    constructor(private commandBus: CommandBus) {}

    @EventPattern('forum.post.post-created')
    postCreated({ userId }: PostCreatedEvent): void {
        const command: IncrementUserCounterPostOnPostCreatedCommand = new IncrementUserCounterPostOnPostCreatedCommand(userId)
        this.commandBus.execute(command)
    }
}
