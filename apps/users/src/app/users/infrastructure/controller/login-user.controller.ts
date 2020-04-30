import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from '@users/users/infrastructure/passport/local/local-auth.guard'
import { CommandBus } from '@nestjs/cqrs'
import { LoginUserCommand } from '@users/users/application/login-user/login-user-command'
import { AccessToken } from '@shared/auth/accesst-token'

@Controller('')
export class LoginUserController {
    constructor(private commandBus: CommandBus) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() request): Promise<AccessToken> {
        const { id, username } = request.user
        return this.commandBus.execute(new LoginUserCommand(id, username))
    }
}
