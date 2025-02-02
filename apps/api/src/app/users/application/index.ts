import { UserRegistration } from './register/user-registration'
import { IncrementUserCounterPost } from './post-created/increment-user-counter-post'
import { RegisterUserCommandHandler } from './register/register-user-command.handler'
import { IncrementUserCounterPostOnPostCreatedHandler } from './post-created/increment-user-counter-post-on-post-created.handler'
import { FindUserQueryHandler } from './find-user/find-user-query.handler'
import { AuthUser } from './auth-user/auth-user'
import { AuthUserCommandHandler } from './auth-user/auth-user-command.handler'
import { LoginUserCommandHandler } from './login-user/login-user-command.handler'
import { LoginUser } from './login-user/login-user'
import { ValidateTokenQueryHandler } from './validate-token/validate-token-query.handler'
import { ValidateToken } from './validate-token/validate-token'

import { IncrementUserCounterComment } from './comment-created/increment-user-counter-comment'
import { IncrementUserCounterCommentOnCommentCreateHandler } from '@api/users/application/comment-created/increment-user-counter-comment-on-comment-create.handler'
import { TopUsersQueryHandler } from '@api/users/application/top-users/top-users-query.handler'

export const APPLICATION_SERVICES = [
    UserRegistration,
    IncrementUserCounterPost,
    AuthUser,
    LoginUser,
    ValidateToken,
    IncrementUserCounterComment
]
export const COMMAND_HANDLERS = [RegisterUserCommandHandler, AuthUserCommandHandler, LoginUserCommandHandler, ValidateTokenQueryHandler]
export const QUERY_HANDLERS = [FindUserQueryHandler, TopUsersQueryHandler]
export const EVENT_HANDLERS = [IncrementUserCounterPostOnPostCreatedHandler, IncrementUserCounterCommentOnCommentCreateHandler]
