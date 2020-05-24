import { CommandBus } from '@nestjs/cqrs'
import { Body, Request, Controller, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common'
import { CreatePostCommand } from '@api/post/application/create/create-post-command'
import { AuthGuard } from '@api/shared/infrastructure/guards/auth.guard'

@Controller('posts')
export class CreatePostController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @UseGuards(AuthGuard)
    createPost(@Param('id') id: string, @Body() { title, content, groupId }: RequestBody, @Request() request): void {
        const userId: string = request.user.id
        const command: CreatePostCommand = new CreatePostCommand({ id, title, content, userId, groupId })
        this.commandBus.execute(command)
    }
}

interface RequestBody {
    title: string
    content: string
    groupId: string
}
