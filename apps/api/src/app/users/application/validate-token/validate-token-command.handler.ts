import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { ValidateToken } from './validate-token'
import { ValidateTokenCommand } from './validate-token-command'

@CommandHandler(ValidateTokenCommand)
export class ValidateTokenCommandHandler implements ICommandHandler<ValidateTokenCommand> {
    constructor(private validateToken: ValidateToken) {}

    execute(command: ValidateTokenCommand): Promise<any> {
        return this.validateToken.validateToken(command.token)
    }
}
