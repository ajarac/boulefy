import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { LoginUserCommand } from './login-user-command'
import { LoginUser } from './login-user'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '../../domain/user-name'
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
