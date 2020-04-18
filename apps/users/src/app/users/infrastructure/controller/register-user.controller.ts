import { Controller } from '@nestjs/common'
import { CommandBus } from '@nestjs/cqrs'
import { EventPattern } from '@nestjs/microservices'
import { RegisterUserCommand } from '@users/users/application/register/register-user-command'
import { RegisterUserEvent } from '@backend/shared/intrastructure/controllers/users/register-user.event';

@Controller()
export class RegisterUserController {
    constructor(private commandBus: CommandBus) {}

    @EventPattern('users.user.register-user')
    registerUser({ id, name, password, email }: RegisterUserEvent): void {
        const command: RegisterUserCommand = new RegisterUserCommand(id, name, password, email)
        this.commandBus.execute(command)
    }
}
