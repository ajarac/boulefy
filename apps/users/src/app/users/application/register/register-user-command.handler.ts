import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { RegisterUserCommand } from '@users/users/application/register/register-user-command'
import { UserRegistration } from '@users/users/application/register/user-registration'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'
import { UserEmail } from '@users/users/domain/user-email'
import { UserPassword } from '@users/users/domain/user-password'

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
