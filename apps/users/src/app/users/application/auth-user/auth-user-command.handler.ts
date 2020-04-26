import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { AuthUserCommand } from '@users/users/application/auth-user/auth-user-command'
import { AuthUser } from '@users/users/application/auth-user/auth-user'
import { UserName } from '@users/users/domain/user-name'
import { UserPassword } from '@users/users/domain/user-password'
import { UserResponse } from '@users/users/application/user.response'

@CommandHandler(AuthUserCommand)
export class AuthUserCommandHandler implements ICommandHandler<AuthUserCommand> {
    constructor(private loginUser: AuthUser) {}

    execute(command: AuthUserCommand): Promise<UserResponse> {
        const username: UserName = new UserName(command.username)
        const password: UserPassword = new UserPassword(command.password)

        return this.loginUser.validate(username, password)
    }
}
