import { Controller, Get, HttpCode, HttpStatus, Inject, Param } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

@Controller('users')
export class FindUserController {
    constructor(@Inject(environment.microservice) private client: ClientProxy) {}

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findUser(@Param('id') id: string): Observable<Response> {
        return this.client.send<Response, string>('users.user.find-user', id)
    }
}

export interface Response {
    id: string
    name: string
    email: string
    counterComments: number
    counterPosts: number
}
