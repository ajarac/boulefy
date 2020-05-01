import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { UserId } from '@backend/shared/domain/user/user-id'
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { IncrementUserCounterPostOnPostCreatedCommand } from '@users/users/application/post-created/increment-user-counter-post-on-post-created-command'

@CommandHandler(IncrementUserCounterPostOnPostCreatedCommand)
export class IncrementUserCounterPostOnPostCreatedCommandHandler implements ICommandHandler<IncrementUserCounterPostOnPostCreatedCommand> {
    constructor(private incrementUserCounterPost: IncrementUserCounterPost) {}

    execute(command: IncrementUserCounterPostOnPostCreatedCommand): Promise<void> {
        const id: UserId = new UserId(command.userId)
        return this.incrementUserCounterPost.increment(id)
    }
}
