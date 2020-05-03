import { Body, Controller, HttpCode, HttpStatus, Param, Request, Post, UseGuards } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { CreateCommentCommand } from '@api/forum/comment/application/create/create-comment-command'
import { AuthGuard } from '@api/forum/post/infrastructure/guards/auth.guard'

@Controller('comments')
export class CreateCommentController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @UseGuards(AuthGuard)
    create(@Param('id') id: string, @Body() { content, postId }: Request, @Request() request): void {
        const userId: string = request.user.id
        const command: CreateCommentCommand = new CreateCommentCommand(id, content, userId, postId)
        this.commandBus.execute(command)
    }
}

interface Request {
    content: string
    postId: string
}
