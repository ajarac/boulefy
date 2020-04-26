import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { CommandBus } from '@nestjs/cqrs'
import { UserExistsCommand } from '@users/users/application/user-exists/user-exists-command'

@Controller()
export class UserExistsController {
    constructor(private commandBus: CommandBus) {}

    @MessagePattern('users.users.user-exists')
    userExists(id: string): Promise<boolean> {
        return this.commandBus.execute(new UserExistsCommand(id))
    }
}
