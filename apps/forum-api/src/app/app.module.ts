import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ForumPostModule } from '@backend/forum/post/forum-post.module';

import { HealthCheckController } from './controller/health-check/health-check.controller';
import { FindPostsController } from './controller/post/find-posts.controller';
import { CreatePostController } from './controller/post/create-post.controller';
import { MONGO_DB_CONFIG } from './config/mongodb.config';

@Module({
    imports: [
        CqrsModule,
        ForumPostModule,
        TypeOrmModule.forRoot(MONGO_DB_CONFIG)
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
