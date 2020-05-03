import { CommentCreator } from './create/comment.creator'
import { CreateCommentCommandHandler } from './create/create-comment-command.handler'
import { CommentFinderByPostId } from './find-comments-by-post-id/comment-finder-by-post-id'
import { FindCommentsByPostIdQueryHandler } from './find-comments-by-post-id/find-comments-by-post-id-query.handler'
import { CommentCreatedHandler } from './create/comment-created.handler'

export const APPLICATION_SERVICES = [CommentCreator, CommentFinderByPostId]
export const COMMAND_HANDLERS = [CreateCommentCommandHandler]
export const QUERY_HANDLERS = [FindCommentsByPostIdQueryHandler]
export const EVENT_HANDLERS = [CommentCreatedHandler]
