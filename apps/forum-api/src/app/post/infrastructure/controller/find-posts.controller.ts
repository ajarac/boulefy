import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindAllPostsQuery } from '@forum-api/post/application/findAll/find-all-posts-query'
import { PostResponse } from '@forum-api/post/application/post.response'

@Controller('posts')
export class FindPostsController {
    constructor(private queryBus: QueryBus) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findPosts(): Promise<Array<PostResponse>> {
        return this.queryBus.execute(new FindAllPostsQuery())
    }
}
