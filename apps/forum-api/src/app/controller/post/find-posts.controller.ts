import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { PostResponse } from '@backend/forum/post/src/application/post.response';
import { FindPostsQuery } from '@backend/forum/post/src/application/findAll/find-posts.query';

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
