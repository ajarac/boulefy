import { Injectable } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { UserId } from '@backend/shared/domain/user/user-id'

@Injectable()
export class IncrementUserCounterPostOnPostCreatedHandler {
    constructor(private incrementUserCounterPost: IncrementUserCounterPost) {}

    @EventPattern('forum-api.post.post-created')
    async handle(postCreatedEvent: PostCreatedEvent): Promise<void> {
        const id: UserId = new UserId(postCreatedEvent.userId)

        await this.incrementUserCounterPost.increment(id)
    }
}
