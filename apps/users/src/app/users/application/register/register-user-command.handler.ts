import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { RegisterUserCommand } from '@users/users/application/register/register-user-command'
import { UserRegistration } from '@users/users/application/register/user-registration'
import { UserId } from '@backend/shared/domain/user/user-id'
import { UserName } from '@users/users/domain/user-name'
import { UserCounterComments } from '@users/users/domain/user-counter-comments'
import { UserCounterPosts } from '@users/users/domain/user-counter-posts'

@CommandHandler(RegisterUserCommand)
export class RegisterUserCommandHandler implements ICommandHandler<RegisterUserCommand> {
    constructor(private registration: UserRegistration) {}

    execute(command: RegisterUserCommand): Promise<void> {
        const id: UserId = new UserId(command.id)
        const name: UserName = new UserName(command.name)
        const counterComments: UserCounterComments = new UserCounterComments(0)
        const counterPosts: UserCounterPosts = new UserCounterPosts(0)

        return this.registration.register(id, name, counterComments, counterPosts)
    }
}
