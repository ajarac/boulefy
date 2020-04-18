import { UserRegistration } from '@users/users/application/register/user-registration'
import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from '@users/users/application/register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedHandler } from '@users/users/application/post-created/increment-user-counter-post-on-post.created.handler'
import { FindUserQueryHandler } from '@users/users/application/find-user/find-user-query.handler'
import { UserFinder } from '@users/users/application/find-user/user-finder'

export const APPLICATION_SERVICES = [UserRegistration, IncrementUserCounterPost, UserFinder]
export const COMMAND_HANDLERS = [RegisterUserCommandHandler]
export const QUERY_HANDLERS = [FindUserQueryHandler]
export const EVENT_HANDLERS = [IncrementUserCounterPostOnPostCreatedHandler]
