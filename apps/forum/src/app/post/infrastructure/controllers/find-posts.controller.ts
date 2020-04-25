import { Controller, Get } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { PostResponse } from '@forum/post/application/post.response'
import { FindPostsQuery } from '@forum/post/application/findAll/find-posts-query'

@Controller('posts')
export class FindPostsController {
    constructor(private queryBus: QueryBus) {}

    @Get()
    async findPosts(): Promise<Array<PostResponse>> {
        return this.queryBus.execute(new FindPostsQuery())
    }
}
