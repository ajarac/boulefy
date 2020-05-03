import { Controller, Get, Param } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { CommentResponse } from '@api/comment/application/comment.response'
import { FindCommentsByPostIdQuery } from '@api/comment/application/find-comments-by-post-id/find-comments-by-post-id-query'


@Controller('comments')
export class FindCommentsByPostIdController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    comments(@Param('id') postId: string): Promise<CommentResponse> {
        return this.queryBus.execute(new FindCommentsByPostIdQuery(postId))
    }
}
