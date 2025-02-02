import { Controller, Get, Query } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { FindPostsQuery } from '@api/post/application/findAll/find-posts-query'
import { PostResponse } from '@shared/models/post/post.response'
import { Pagination } from '@shared/models/pagination/pagination'

@Controller('posts')
export class FindPostsController {
    constructor(private queryBus: QueryBus) {}

    @Get()
    async findPosts(@Query() { page, limit }): Promise<Pagination<PostResponse>> {
        return this.queryBus.execute(new FindPostsQuery(page, limit))
    }
}
