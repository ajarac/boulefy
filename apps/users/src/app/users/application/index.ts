import { UserRegistration } from '@users/users/application/register/user-registration'
import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from '@users/users/application/register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedHandler } from '@users/users/application/post-created/increment-user-counter-post-on-post.created.handler'
import { FindUserQueryHandler } from '@users/users/application/find-user/find-user-query.handler'
import { UserFinder } from '@users/users/application/find-user/user-finder'
import { AuthUser } from '@users/users/application/auth-user/auth-user'
import { AuthUserCommandHandler } from '@users/users/application/auth-user/auth-user-command.handler'
import { LoginUserCommandHandler } from '@users/users/application/login-user/login-user-command.handler'
import { LoginUser } from '@users/users/application/login-user/login-user'

export const APPLICATION_SERVICES = [UserRegistration, IncrementUserCounterPost, UserFinder, AuthUser, LoginUser]
export const COMMAND_HANDLERS = [RegisterUserCommandHandler, AuthUserCommandHandler, LoginUserCommandHandler]
export const QUERY_HANDLERS = [FindUserQueryHandler]
export const EVENT_HANDLERS = [IncrementUserCounterPostOnPostCreatedHandler]
