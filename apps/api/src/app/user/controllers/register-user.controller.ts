import { Body, Controller, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { environment } from '../../../environments/environment'
import { RegisterUserEvent } from '@backend/shared/intrastructure/controllers/users/register-user.event'

@Controller('users')
export class RegisterUserController {
    constructor(@Inject(environment.microservice) private client: ClientProxy) {}

    @Post(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    registerUser(@Param('id') id: string, @Body() request: Request): void {
        const event: RegisterUserEvent = new RegisterUserEvent(id, request.name, request.password, request.email)
        this.client.emit<Event>('users.user.register-user', event)
    }
}

interface Request {
    name: string
    password: string
    email: string
}
