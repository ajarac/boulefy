import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { FindPostsQuery } from '@backend/forum/post/application/findAll/find-posts.query';
import { PostResponse } from '@backend/forum/post/application/post.response';

@Controller('posts')
export class FindPostsController {

    constructor(private queryBus: QueryBus) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findPosts(): Promise<Array<PostResponse>> {
        return this.queryBus.execute(new FindPostsQuery());
    }
}
