import { ClientProxy } from '@nestjs/microservices'
import { Controller, Get, HttpCode, HttpStatus, Inject, Param } from '@nestjs/common'
import { Observable } from 'rxjs'

import { PostResponse } from '@forum/post/application/post.response'
import { environment } from '../../../../environments/environment'

@Controller('posts')
export class FindPostController {
    constructor(@Inject(environment.microservice) private client: ClientProxy) {}

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findPost(@Param('id') id: string): Observable<PostResponse> {
        return this.client.send('forum.post.find-post', id)
    }
}
