import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { CommandBus } from '@nestjs/cqrs'
import { UserResponse } from '@users/users/application/user.response'
import { AuthUserCommand } from '@users/users/application/auth-user/auth-user-command'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private commandBus: CommandBus) {
        super()
    }

    async validate(username: string, password: string): Promise<UserResponse> {
        return this.commandBus.execute(new AuthUserCommand(username, password))
    }
}
