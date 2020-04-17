import { Body, Controller, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { environment } from '../../../../environments/environment'

@Controller('posts')
export class CreatePostController {
    constructor(@Inject(environment.microservice) private client: ClientProxy) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    createPost(@Param('id') id: string, @Body() request: Request): void {
        this.client.emit('forum.post.create-post', { id, title: request.title, userId: request.userId })
    }
}

interface Request {
    title: string
    userId: string
}
