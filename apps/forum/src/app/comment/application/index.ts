import { CommentCreator } from '@forum/comment/application/create/comment.creator'
import { CreateCommentCommandHandler } from '@forum/comment/application/create/create-comment-command.handler'

export const APPLICATION_SERVICES = [CommentCreator]
export const COMMAND_HANDLERS = [CreateCommentCommandHandler]
