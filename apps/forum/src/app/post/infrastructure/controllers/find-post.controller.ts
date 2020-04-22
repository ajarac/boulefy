import { Controller, Get, Param } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindPostQuery } from '@forum/post/application/find/find-post-query'
import { PostResponse } from '@forum/post/application/post.response'

@Controller()
export class FindPostController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    findPost(@Param('id') id: string): Promise<PostResponse> {
        return this.queryBus.execute(new FindPostQuery(id))
    }
}
