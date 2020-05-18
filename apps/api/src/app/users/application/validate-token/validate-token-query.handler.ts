import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { ValidateTokenQuery } from '@api/shared/application/validate-token-query'
import { ValidateToken } from '@api/users/application/validate-token/validate-token'

@QueryHandler(ValidateTokenQuery)
export class ValidateTokenQueryHandler implements IQueryHandler<ValidateTokenQuery> {
    constructor(private validateToken: ValidateToken) {}

    execute(command: ValidateTokenQuery): Promise<any> {
        return this.validateToken.validateToken(command.token)
    }
}
