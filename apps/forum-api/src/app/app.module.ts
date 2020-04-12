import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ForumPostModule } from '@backend/forum/post/src/forum-post.module';
import { HealthCheckController } from './controller/health-check/health-check.controller';
import { FindPostsController } from './controller/post/find-posts.controller';
import { CreatePostController } from './controller/post/create-post.controller';

@Module({
    imports: [
        CqrsModule,
        ForumPostModule
    ],
    controllers: [
        HealthCheckController,
        FindPostsController,
        CreatePostController
    ],
    providers: []
})
export class AppModule {
}
