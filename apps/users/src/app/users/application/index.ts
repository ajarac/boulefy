import { UserRegistration } from '@users/users/application/register/user-registration'
import { IncrementUserCounterPost } from '@users/users/application/post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from '@users/users/application/register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedCommandHandler } from '@users/users/application/post-created/increment-user-counter-post-on-post-created-command.handler'
import { FindUserQueryHandler } from '@users/users/application/find-user/find-user-query.handler'
import { UserFinder } from '@users/users/application/find-user/user-finder'
import { AuthUser } from '@users/users/application/auth-user/auth-user'
import { AuthUserCommandHandler } from '@users/users/application/auth-user/auth-user-command.handler'
import { LoginUserCommandHandler } from '@users/users/application/login-user/login-user-command.handler'
import { LoginUser } from '@users/users/application/login-user/login-user'
import { ValidateTokenCommandHandler } from '@users/users/application/validate-token/validate-token-command.handler'
import { ValidateToken } from '@users/users/application/validate-token/validate-token'
import { IncrementUserCounterCommentOnCommentCreateCommand } from '@users/users/application/comment-created/increment-user-counter-comment-on-comment-create-command'
import { IncrementUserCounterComment } from '@users/users/application/comment-created/increment-user-counter-comment'

export const APPLICATION_SERVICES = [
    UserRegistration,
    IncrementUserCounterPost,
    UserFinder,
    AuthUser,
    LoginUser,
    ValidateToken,
    IncrementUserCounterComment
]
export const COMMAND_HANDLERS = [
    RegisterUserCommandHandler,
    AuthUserCommandHandler,
    LoginUserCommandHandler,
    ValidateTokenCommandHandler,
    IncrementUserCounterCommentOnCommentCreateCommand,
    IncrementUserCounterPostOnPostCreatedCommandHandler
]
export const QUERY_HANDLERS = [FindUserQueryHandler]
