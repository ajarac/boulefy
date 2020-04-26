import { UserRegistration } from '@users/users/application/register/user-registration'
import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from '@users/users/application/register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedHandler } from '@users/users/application/post-created/increment-user-counter-post-on-post.created.handler'
import { FindUserQueryHandler } from '@users/users/application/find-user/find-user-query.handler'
import { UserFinder } from '@users/users/application/find-user/user-finder'
import { UserExists } from '@users/users/application/user-exists/user-exists'
import { UserExistsCommandHandler } from '@users/users/application/user-exists/user-exists-command.handler'

export const APPLICATION_SERVICES = [UserRegistration, IncrementUserCounterPost, UserFinder, UserExists]
export const COMMAND_HANDLERS = [RegisterUserCommandHandler, UserExistsCommandHandler]
export const QUERY_HANDLERS = [FindUserQueryHandler]
export const EVENT_HANDLERS = [IncrementUserCounterPostOnPostCreatedHandler]
