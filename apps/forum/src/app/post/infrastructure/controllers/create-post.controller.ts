import { CommandBus } from '@nestjs/cqrs'
import { Body, Request, Controller, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common'

import { CreatePostCommand } from '@forum/post/application/create/create-post-command'
import { AuthGuard } from '@forum/post/infrastructure/guards/auth.guard'

@Controller('posts')
export class CreatePostController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @UseGuards(AuthGuard)
    async createPost(@Param('id') id: string, @Body() { title }: Request, @Request() request): Promise<void> {
        const userId: string = request.user.sub
        const command: CreatePostCommand = new CreatePostCommand(id, title, userId)
        return this.commandBus.execute(command)
    }
}

interface Request {
    title: string
}
