import { UserRegistration } from '@users/users/application/register/user-registration'
import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from '@users/users/application/register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedHandler } from '@users/users/application/post-created/increment-user-counter-post-on-post.created.handler'

export const APPLICATION_SERVICES = [UserRegistration, IncrementUserCounterPost]
export const COMMAND_HANDLERS = [RegisterUserCommandHandler]
export const EVENT_HANDLERS = [IncrementUserCounterPostOnPostCreatedHandler]
