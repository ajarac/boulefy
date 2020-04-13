import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostCreator } from '@backend/forum/post/application/create/post-creator';
import { PostFinder } from '@backend/forum/post/application/find/post-finder';
import { FindPostsHandler } from '@backend/forum/post/application/findAll/find-posts.handler';
import { CreatePostHandler } from '@backend/forum/post/application/create/create-post.handler';
import { PostFinderAll } from '@backend/forum/post/application/findAll/post-finder-all';
import { PostRepository } from '@backend/forum/post/domain';
import { OrmPostRepository } from '@backend/forum/post/infrastructure/persistence/orm/orm-post.repository';
import { PostSchema } from '@backend/forum/post/infrastructure/persistence/orm/post.schema';

@Module({
    imports: [ TypeOrmModule.forFeature([ PostSchema ]) ],
    providers: [
        PostCreator,
        CreatePostHandler,
        PostFinderAll,
        FindPostsHandler,
        PostFinder,
        {
            provide: PostRepository,
            useClass: OrmPostRepository
        }
    ]
})
export class ForumPostModule {
}
