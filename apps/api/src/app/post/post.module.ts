import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MongoPostRepository } from './infrastructure/persistence/mongo/command/mongo-post.repository'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from './application'
import { PostSchema } from './infrastructure/persistence/mongo/post.schema'
import { CONTROLLERS } from './infrastructure/controllers'
import { PostRepository } from './domain/post.repository'
import { QUERIES } from '@api/post/infrastructure/persistence/mongo/query'
import { PagerMiddleware } from '@api/shared/infrastructure/middleware/pager.middleware'
import { FindPostsController } from '@api/post/infrastructure/controllers/find-posts.controller'
import { SharedModule } from '@api/shared/shared.module'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([PostSchema]), SharedModule],
    controllers: [...CONTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...EVENT_HANDLERS,
        ...QUERIES,
        {
            provide: PostRepository,
            useClass: MongoPostRepository
        }
    ]
})
export class PostModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(PagerMiddleware).forRoutes(FindPostsController)
    }
}
