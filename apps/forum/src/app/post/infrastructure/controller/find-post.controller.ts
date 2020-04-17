import { Controller } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'

import { FindPostQuery } from '@forum/post/application/find/find-post-query'
import { PostResponse } from '@forum/post/application/post.response'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class FindPostController {
    constructor(private queryBus: QueryBus) {}

    @MessagePattern({ cmd: 'forum.post.find-post' })
    findPost(id: string): Promise<PostResponse> {
        return this.queryBus.execute(new FindPostQuery(id))
    }
}
