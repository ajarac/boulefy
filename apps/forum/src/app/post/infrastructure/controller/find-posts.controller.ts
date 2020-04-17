import { Controller } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { PostResponse } from '@forum/post/application/post.response'
import { MessagePattern } from '@nestjs/microservices'
import { FindAllPostsQuery } from '@forum/post/application/findAll/find-all-posts-query'

@Controller()
export class FindPostsController {
    constructor(private queryBus: QueryBus) {}

    @MessagePattern({ cmd: 'forum.post.find-posts' })
    async findPosts(): Promise<Array<PostResponse>> {
        return this.queryBus.execute(new FindAllPostsQuery())
    }
}
