import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { environment } from '../../../../../environments/environment'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(@Inject(environment.clientName) private client: ClientProxy) {}

    private static getToken(request): string {
        const authorization: string = request.headers.authorization
        return authorization ? authorization.split(' ')[1] : null
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token: string = AuthGuard.getToken(request)
        if (token) {
            const info = await this.client.send('users.users.validate-user', token).toPromise()
            request.user = info
            return !!info
        } else {
            return false
        }
    }
}
