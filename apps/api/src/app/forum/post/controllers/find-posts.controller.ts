import { Controller, Get, HttpCode, HttpStatus, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'

import { environment } from '../../../../environments/environment'
import { PostResponse } from '@forum/post/application/post.response'

@Controller('posts')
export class FindPostsController {
    constructor(@Inject(environment.microservice) private readonly client: ClientProxy) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findPosts(): Observable<Array<PostResponse>> {
        return this.client.send({ cmd: 'forum.post.find-posts' }, {})
    }
}
