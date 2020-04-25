import { Controller, Get, Param, UseFilters } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindPostQuery } from '@forum/post/application/find/find-post-query'
import { PostResponse } from '@forum/post/application/post.response'
import { PostNotFoundFilter } from '@forum/post/infrastructure/filters/post-not-found.filter'

@Controller('posts')
export class FindPostController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    @UseFilters(PostNotFoundFilter)
    findPost(@Param('id') id: string): Promise<PostResponse> {
        return this.queryBus.execute(new FindPostQuery(id))
    }
}
