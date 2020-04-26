import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { UserExistsCommand } from '@users/users/application/user-exists/user-exists-command'
import { UserExists } from '@users/users/application/user-exists/user-exists'
import { UserId } from '@backend/shared/domain/user/user-id'

@CommandHandler(UserExistsCommand)
export class UserExistsCommandHandler implements ICommandHandler<UserExistsCommand> {
    constructor(private userExists: UserExists) {}

    execute(command: UserExistsCommand): Promise<boolean> {
        const id: UserId = new UserId(command.id)
        return this.userExists.exists(id)
    }
}
