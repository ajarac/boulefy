import { CreatePostCommandHandler } from '@forum/post/application/create/create-post-command.handler'
import { FindPostQueryHandler } from '@forum/post/application/find/find-post-query.handler'
import { FindPostsQueryHandler } from '@forum/post/application/findAll/find-posts-query.handler'
import { PostCreator } from '@forum/post/application/create/post-creator'
import { PostFinder } from '@forum/post/application/find/post-finder'
import { PostFinderAll } from '@forum/post/application/findAll/post-finder-all'
import { PostCreatedHandler } from '@forum/post/application/create/post-created.handler'
import { IncrementCounterComment } from '@forum/post/application/comment-created/increment-counter-comment'
import { IncrementCounterCommentsOnCommentCreatedHandler } from '@forum/post/application/comment-created/increment-counter-comments-on-comment-created.handler'

export const APPLICATION_SERVICES = [PostCreator, PostFinder, PostFinderAll, IncrementCounterComment]
export const COMMAND_HANDLERS = [CreatePostCommandHandler, IncrementCounterCommentsOnCommentCreatedHandler]
export const QUERY_HANDLERS = [FindPostQueryHandler, FindPostsQueryHandler]
export const EVENT_HANDLERS = [PostCreatedHandler]
