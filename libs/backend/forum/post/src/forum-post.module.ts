import { Module } from '@nestjs/common';

import { PostCreator } from '@backend/forum/post/src/application/create/post-creator';
import { InMemoryPostRepository } from '@backend/forum/post/src/infrastructure/persistence/in-memory-post.repository';
import { CreatePostHandler } from '@backend/forum/post/src/application/create/create-post.handler';
import { PostRepository } from '@backend/forum/post/src/domain';
import { PostFinder } from '@backend/forum/post/src/application/findAll/post-finder';
import { FindPostsHandler } from '@backend/forum/post/src/application/findAll/find-posts.handler';

@Module({
    providers: [
        PostCreator,
        CreatePostHandler,
        PostFinder,
        FindPostsHandler,
        {
            provide: PostRepository,
            useClass: InMemoryPostRepository
        }
    ]
})
export class ForumPostModule {
}
