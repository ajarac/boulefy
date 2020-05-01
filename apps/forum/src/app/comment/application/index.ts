import { CommentCreator } from '@forum/comment/application/create/comment.creator'
import { CreateCommentCommandHandler } from '@forum/comment/application/create/create-comment-command.handler'
import { CommentFinderByPostId } from '@forum/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { FindCommentsByPostIdCommandHandler } from '@forum/comment/application/find-comments-by-post-id/find-comments-by-post-id-command.handler'

export const APPLICATION_SERVICES = [CommentCreator, CommentFinderByPostId]
export const COMMAND_HANDLERS = [CreateCommentCommandHandler]
export const QUERY_HANDLERS = [FindCommentsByPostIdCommandHandler]
