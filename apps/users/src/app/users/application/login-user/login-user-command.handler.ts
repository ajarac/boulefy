import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { LoginUserCommand } from '@users/users/application/login-user/login-user-command'
import { LoginUser } from '@users/users/application/login-user/login-user'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { AccessToken } from '@shared/auth/accesst-token'

@CommandHandler(LoginUserCommand)
export class LoginUserCommandHandler implements ICommandHandler<LoginUserCommand> {
    constructor(private loginUser: LoginUser) {}

    async execute(command: LoginUserCommand): Promise<AccessToken> {
        const id: UserId = new UserId(command.id)
        const username: UserName = new UserName(command.username)
        return this.loginUser.login(id, username)
    }
}
