import { Module } from '@nestjs/common'
import { CreatePostController } from './post/controllers/create-post.controller'
import { FindPostController } from './post/controllers/find-post.controller'
import { FindPostsController } from './post/controllers/find-posts.controller'

@Module({
    imports: [],
    controllers: [CreatePostController, FindPostController, FindPostsController]
})
export class ForumModule {}
