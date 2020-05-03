import { CommentCreator } from '@api/forum/comment/application/create/comment.creator'
import { FindCommentsByPostIdQueryHandler } from '@api/forum/comment/application/find-comments-by-post-id/find-comments-by-post-id-query.handler'
import { CommentFinderByPostId } from '@api/forum/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { CreateCommentCommandHandler } from '@api/forum/comment/application/create/create-comment-command.handler'

export const APPLICATION_SERVICES = [CommentCreator, CommentFinderByPostId]
export const COMMAND_HANDLERS = [CreateCommentCommandHandler]
export const QUERY_HANDLERS = [FindCommentsByPostIdQueryHandler]
