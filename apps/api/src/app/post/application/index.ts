import { CreatePostCommandHandler } from './create/create-post-command.handler'
import { FindPostQueryHandler } from './find/find-post-query.handler'
import { FindPostsQueryHandler } from './findAll/find-posts-query.handler'
import { PostCreator } from './create/post-creator'
import { IncrementCounterComment } from './comment-created/increment-counter-comment'
import { IncrementCounterCommentsOnCommentCreatedHandler } from './comment-created/increment-counter-comments-on-comment-created.handler'

export const APPLICATION_SERVICES = [PostCreator, IncrementCounterComment]
export const COMMAND_HANDLERS = [CreatePostCommandHandler]
export const QUERY_HANDLERS = [FindPostQueryHandler, FindPostsQueryHandler]
export const EVENT_HANDLERS = [IncrementCounterCommentsOnCommentCreatedHandler]
