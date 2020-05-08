import { Controller, Get, Param, Query } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { FindCommentsByPostIdQuery } from '@api/comment/application/find-comments-by-post-id/find-comments-by-post-id-query'
import { CommentResponse } from '@shared/models/comment/comment.response'

@Controller('posts')
export class FindCommentsByPostIdController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id/comments')
    comments(@Query() { page, limit }, @Param('id') postId: string): Promise<CommentResponse> {
        return this.queryBus.execute(new FindCommentsByPostIdQuery(postId, page, limit))
    }
}
