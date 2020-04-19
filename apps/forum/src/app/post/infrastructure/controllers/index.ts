import { CreatePostController } from '@forum/post/infrastructure/controllers/create-post.controller'
import { FindPostController } from '@forum/post/infrastructure/controllers/find-post.controller'
import { FindPostsController } from '@forum/post/infrastructure/controllers/find-posts.controller'

export const CONTROLLERS = [CreatePostController, FindPostController, FindPostsController]
