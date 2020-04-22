import { CommandBus } from '@nestjs/cqrs'
import { Body, Controller, Param, Post } from '@nestjs/common'

import { CreatePostCommand } from '@forum/post/application/create/create-post-command'

@Controller()
export class CreatePostController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    async createPost(@Param('id') id: string, @Body() { title, userId }: Request): Promise<void> {
        const command: CreatePostCommand = new CreatePostCommand(id, title, userId)
        return this.commandBus.execute(command)
    }
}

interface Request {
    title: string
    userId: string
}
