import { Body, Controller, Param, Post } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { RegisterUserCommand } from '../../application/register/register-user-command'

@Controller('register')
export class RegisterUserController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    registerUser(@Param('id') id: string, @Body() { username, password, email }: Request): void {
        const command: RegisterUserCommand = new RegisterUserCommand({ id, username, password, email })
        this.commandBus.execute(command)
    }
}

interface Request {
    username: string
    password: string
    email: string
}
