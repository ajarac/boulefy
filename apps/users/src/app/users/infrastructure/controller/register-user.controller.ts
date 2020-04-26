import { Body, Controller, Param, Post } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { RegisterUserCommand } from '@users/users/application/register/register-user-command'

@Controller('register')
export class RegisterUserController {
    constructor(private commandBus: CommandBus) {}

    @Post(':id')
    registerUser(@Param('id') id: string, @Body() { name, password, email }: Request): void {
        const command: RegisterUserCommand = new RegisterUserCommand(id, name, password, email)
        this.commandBus.execute(command)
    }
}

interface Request {
    name: string
    password: string
    email: string
}
