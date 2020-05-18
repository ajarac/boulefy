import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { AccessToken } from '@shared/auth/accesst-token'
import { UserName } from '@api/shared/domain/user/user-name'
import { LoginUserCommand } from '@api/users/application/login-user/login-user-command'
import { UserId } from '@api/shared/domain/user/user-id'
import { LoginUser } from '@api/users/application/login-user/login-user'

@CommandHandler(LoginUserCommand)
export class LoginUserCommandHandler implements ICommandHandler<LoginUserCommand> {
    constructor(private loginUser: LoginUser) {}

    async execute(command: LoginUserCommand): Promise<AccessToken> {
        const id: UserId = new UserId(command.id)
        const username: UserName = new UserName(command.username)
        return this.loginUser.login(id, username)
    }
}
