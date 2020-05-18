import { GroupCreator } from '@api/group/application/create/group.creator'
import { CreateGroupCommandHandler } from '@api/group/application/create/create-group-command.handler'

export const APPLICATION_SERVICES = [GroupCreator]
export const COMMAND_HANDLERS = [CreateGroupCommandHandler]
