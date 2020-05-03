import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { ValidateTokenQuery } from '@api/shared/application/validate-token-query'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private queryBus: QueryBus) {}

    private static getToken(request): string {
        const authorization: string = request.headers.authorization
        return authorization ? authorization.split(' ')[1] : null
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token: string = AuthGuard.getToken(request)
        if (token) {
            const info = await this.queryBus.execute(new ValidateTokenQuery(token))
            request.user = info
            return !!info
        } else {
            return false
        }
    }
}
