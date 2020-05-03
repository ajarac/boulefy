import { UserRegistration } from './register/user-registration'
import { IncrementUserCounterPost } from './post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from './register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedHandler } from './post-created/increment-user-counter-post-on-post-created.handler'
import { FindUserQueryHandler } from './find-user/find-user-query.handler'
import { UserFinder } from './find-user/user-finder'
import { AuthUser } from './auth-user/auth-user'
import { AuthUserCommandHandler } from './auth-user/auth-user-command.handler'
import { LoginUserCommandHandler } from './login-user/login-user-command.handler'
import { LoginUser } from './login-user/login-user'
import { ValidateTokenCommandHandler } from './validate-token/validate-token-command.handler'
import { ValidateToken } from './validate-token/validate-token'

import { IncrementUserCounterComment } from './comment-created/increment-user-counter-comment'
import { IncrementUserCounterCommentOnCommentCreateHandler } from '@api/users/application/comment-created/increment-user-counter-comment-on-comment-create.handler'

export const APPLICATION_SERVICES = [
    UserRegistration,
    IncrementUserCounterPost,
    UserFinder,
    AuthUser,
    LoginUser,
    ValidateToken,
    IncrementUserCounterComment
]
export const COMMAND_HANDLERS = [RegisterUserCommandHandler, AuthUserCommandHandler, LoginUserCommandHandler, ValidateTokenCommandHandler]
export const QUERY_HANDLERS = [FindUserQueryHandler]
export const EVENT_HANDLERS = [IncrementUserCounterPostOnPostCreatedHandler, IncrementUserCounterCommentOnCommentCreateHandler]
