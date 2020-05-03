import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { UserResponse } from '../../application/user.response'
import { CommandBus } from '@nestjs/cqrs'
import { ValidateTokenCommand } from '../../application/validate-token/validate-token-command'

@Controller()
export class ValidateUserController {

    constructor(private commandBus: CommandBus) {
    }

    @MessagePattern('users.users.validate-user')
    validateUser(data): Promise<UserResponse> {
        return this.commandBus.execute(new ValidateTokenCommand(data))
    }
}
