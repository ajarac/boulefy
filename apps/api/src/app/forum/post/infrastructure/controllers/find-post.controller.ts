import { Controller, Get, Param, UseFilters } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindPostQuery } from '../../application/find/find-post-query'
import { PostResponse } from '../../application/post.response'
import { PostNotFoundFilter } from '../filters/post-not-found.filter'

@Controller('posts')
export class FindPostController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    @UseFilters(PostNotFoundFilter)
    findPost(@Param('id') id: string): Promise<PostResponse> {
        return this.queryBus.execute(new FindPostQuery(id))
    }
}
