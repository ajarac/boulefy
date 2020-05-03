import { Controller, Get } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { FindPostsQuery } from '@api/post/application/findAll/find-posts-query'
import { PostResponse } from '@api/post/application/post.response'

@Controller('posts')
export class FindPostsController {
    constructor(private queryBus: QueryBus) {}

    @Get()
    async findPosts(): Promise<Array<PostResponse>> {
        return this.queryBus.execute(new FindPostsQuery())
    }
}
