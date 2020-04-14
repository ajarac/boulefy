import { Body, Controller, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'

import { CreatePostCommand } from '@forum-api/post/application/create/create-post-command'

@Controller('posts')
export class CreatePostController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    createPost(@Param('id') id: string, @Body() request: Request): void {
        const command: CreatePostCommand = new CreatePostCommand(id, request.title)
        this.commandBus.execute(command)
    }
}

interface Request {
    title: string
}
