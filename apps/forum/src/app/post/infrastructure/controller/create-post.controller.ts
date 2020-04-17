import { CommandBus } from '@nestjs/cqrs'

import { CreatePostCommand } from '@forum/post/application/create/create-post-command'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'

@Controller()
export class CreatePostController {
    constructor(private commandBus: CommandBus) {}

    @EventPattern('forum.post.create-post')
    createPost({ id, title, userId }: Event): void {
        const command: CreatePostCommand = new CreatePostCommand(id, title, userId)
        this.commandBus.execute(command)
    }
}

interface Event {
    id: string
    title: string
    userId: string
}
