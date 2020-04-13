import { CreatePostController } from '@forum-api/post/infrastructure/controller/create-post.controller';
import { FindPostController } from '@forum-api/post/infrastructure/controller/find-post.controller';
import { FindPostsController } from '@forum-api/post/infrastructure/controller/find-posts.controller';

export const CONTROLLERS = [ CreatePostController, FindPostController, FindPostsController ];
