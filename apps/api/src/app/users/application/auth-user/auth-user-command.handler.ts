import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { UserResponse } from '@shared/models/user/user.response'
import { UserName } from '@api/shared/domain/user/user-name'
import { AuthUserCommand } from '@api/users/application/auth-user/auth-user-command'
import { UserPassword } from '@api/users/domain/user-password'
import { AuthUser } from '@api/users/application/auth-user/auth-user'

@CommandHandler(AuthUserCommand)
export class AuthUserCommandHandler implements ICommandHandler<AuthUserCommand> {
    constructor(private loginUser: AuthUser) {}

    execute(command: AuthUserCommand): Promise<UserResponse> {
        const username: UserName = new UserName(command.username)
        const password: UserPassword = new UserPassword(command.password)

        return this.loginUser.validate(username, password)
    }
}
