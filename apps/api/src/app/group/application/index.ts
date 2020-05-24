import { GroupCreator } from '@api/group/application/create/group.creator'
import { CreateGroupCommandHandler } from '@api/group/application/create/create-group-command.handler'
import { IncrementCounterPostOnPostCreatedHandler } from '@api/group/application/post-created/increment-counter-post-on-post-created.handler'
import { IncrementCounterPost } from '@api/group/application/post-created/increment-counter-post'

export const APPLICATION_SERVICES = [GroupCreator, IncrementCounterPost]
export const COMMAND_HANDLERS = [CreateGroupCommandHandler]
export const EVENT_HANDLERS = [IncrementCounterPostOnPostCreatedHandler]
