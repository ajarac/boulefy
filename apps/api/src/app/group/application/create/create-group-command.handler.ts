import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CreateGroupCommand } from '@api/group/application/create/create-group-command'
import { GroupCreator } from '@api/group/application/create/group.creator'
import { GroupId } from '@api/shared/domain/group/group-id'
import { GroupName } from '@api/group/domain/group-name'
import { GroupDescription } from '@api/group/domain/group-description'
import { UserId } from '@api/shared/domain/user/user-id'

@CommandHandler(CreateGroupCommand)
export class CreateGroupCommandHandler implements ICommandHandler<CreateGroupCommand> {
    constructor(private groupCreator: GroupCreator) {}

    execute(command: CreateGroupCommand): Promise<void> {
        const id: GroupId = new GroupId(command.id)
        const name: GroupName = new GroupName(command.name)
        const description: GroupDescription = new GroupDescription(command.description)
        const userId: UserId = new UserId(command.userId)

        return this.groupCreator.create({id, name, description, userId})
    }
}
