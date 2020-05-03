import { Controller, Get, Param, UseFilters } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindPostQuery } from '@api/forum/post/application/find/find-post-query'
import { PostNotFoundFilter } from '@api/forum/post/infrastructure/filters/post-not-found.filter'
import { PostResponse } from '@api/forum/post/application/post.response'

@Controller('posts')
export class FindPostController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    @UseFilters(PostNotFoundFilter)
    findPost(@Param('id') id: string): Promise<PostResponse> {
        return this.queryBus.execute(new FindPostQuery(id))
    }
}
