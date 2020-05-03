import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { RegisterUserCommand } from './register-user-command'
import { UserRegistration } from './user-registration'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@backend/shared/domain/user/user-name'
import { UserCounterComments } from '../../domain/user-counter-comments'
import { UserCounterPosts } from '../../domain/user-counter-posts'
import { UserEmail } from '../../domain/user-email'
import { UserPassword } from '../../domain/user-password'

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
