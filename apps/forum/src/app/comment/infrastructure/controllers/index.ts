import { CreateCommentController } from '@forum/comment/infrastructure/controllers/create-comment.controller'
import { FindCommentsByPostIdController } from '@forum/comment/infrastructure/controllers/find-comments-by-post-id.controller'

export const CONTROLLERS = [CreateCommentController, FindCommentsByPostIdController]
