import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(@Inject(environment.clientName) private client: ClientProxy) {}

    canActivate(context: ExecutionContext): Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        console.log('REQUEST', request)
        const params = request.params
        const id: string = params.id
        return this.client.send('users.users.user-exists', id)
    }
}
