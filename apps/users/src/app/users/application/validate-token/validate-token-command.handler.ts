import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { ValidateToken } from '@users/users/application/validate-token/validate-token'
import { ValidateTokenCommand } from '@users/users/application/validate-token/validate-token-command'

@CommandHandler(ValidateTokenCommand)
export class ValidateTokenCommandHandler implements ICommandHandler<ValidateTokenCommand> {
    constructor(private validateToken: ValidateToken) {}

    execute(command: ValidateTokenCommand): Promise<any> {
        return this.validateToken.validateToken(command.token)
    }
}
