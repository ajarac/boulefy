import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindPostQuery } from '@forum-api/post/application/find/find-post-query'
import { PostResponse } from '@forum-api/post/application/post.response'

@Controller('posts')
export class FindPostController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findPost(@Param('id') id: string): Promise<PostResponse> {
        return this.queryBus.execute(new FindPostQuery(id))
    }
}
