import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { AuthUserCommand } from './auth-user-command'
import { AuthUser } from './auth-user'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserPassword } from '../../domain/user-password'
import { UserResponse } from '@shared/models/user/user.response'

@CommandHandler(AuthUserCommand)
export class AuthUserCommandHandler implements ICommandHandler<AuthUserCommand> {
    constructor(private loginUser: AuthUser) {}

    execute(command: AuthUserCommand): Promise<UserResponse> {
        const username: UserName = new UserName(command.username)
        const password: UserPassword = new UserPassword(command.password)

        return this.loginUser.validate(username, password)
    }
}
