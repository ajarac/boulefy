import { Controller, Get, Param } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { CommentResponse } from '@forum/comment/application/comment.response'
import { FindCommentsByPostIdCommand } from '@forum/comment/application/find-comments-by-post-id/find-comments-by-post-id-command'

@Controller('comments')
export class FindCommentsByPostIdController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    comments(@Param('id') postId: string): Promise<CommentResponse> {
        return this.queryBus.execute(new FindCommentsByPostIdCommand(postId))
    }
}
