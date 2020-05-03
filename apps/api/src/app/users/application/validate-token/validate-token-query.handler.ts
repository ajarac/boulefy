import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { ValidateToken } from './validate-token'
import { ValidateTokenQuery } from '@api/shared/application/validate-token-query'

@QueryHandler(ValidateTokenQuery)
export class ValidateTokenQueryHandler implements IQueryHandler<ValidateTokenQuery> {
    constructor(private validateToken: ValidateToken) {}

    execute(command: ValidateTokenQuery): Promise<any> {
        return this.validateToken.validateToken(command.token)
    }
}
