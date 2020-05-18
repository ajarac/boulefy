import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { RegisterUserCommand } from '@api/users/application/register/register-user-command'
import { UserName } from '@api/shared/domain/user/user-name'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserCounterPosts } from '@api/users/domain/user-counter-posts'
import { UserPassword } from '@api/users/domain/user-password'
import { UserRegistration } from '@api/users/application/register/user-registration'
import { UserEmail } from '@api/users/domain/user-email'
import { UserCounterComments } from '@api/users/domain/user-counter-comments'

@CommandHandler(RegisterUserCommand)
export class RegisterUserCommandHandler implements ICommandHandler<RegisterUserCommand> {
    constructor(private registration: UserRegistration) {}

    execute(command: RegisterUserCommand): Promise<void> {
        const id: UserId = new UserId(command.id)
        const username: UserName = new UserName(command.username)
        const password: UserPassword = new UserPassword(command.password)
        const email: UserEmail = new UserEmail(command.email)
        const counterComments: UserCounterComments = new UserCounterComments(0)
        const counterPosts: UserCounterPosts = new UserCounterPosts(0)

        return this.registration.register(id, username, password, email, counterComments, counterPosts)
    }
}
