import { CreatePostCommandHandler } from '@forum/post/application/create/create-post-command.handler'
import { FindPostQueryHandler } from '@forum/post/application/find/find-post-query.handler'
import { FindPostsQueryHandler } from '@forum/post/application/findAll/find-posts-query.handler'
import { PostCreator } from '@forum/post/application/create/post-creator'
import { PostFinder } from '@forum/post/application/find/post-finder'
import { PostFinderAll } from '@forum/post/application/findAll/post-finder-all'
import { PostCreatedHandler } from '@forum/post/application/create/post-created.handler'

export const APPLICATION_SERVICES = [PostCreator, PostFinder, PostFinderAll]
export const COMMAND_HANDLERS = [CreatePostCommandHandler]
export const QUERY_HANDLERS = [FindPostQueryHandler, FindPostsQueryHandler]
export const EVENT_HANDLER = [PostCreatedHandler]
