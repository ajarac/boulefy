import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { QUERIES } from '@api/post/infrastructure/persistence/mongo/query'
import { PagerMiddleware } from '@api/shared/infrastructure/middleware/pager.middleware'
import { FindPostsController } from '@api/post/infrastructure/controllers/find-posts.controller'
import { SharedModule } from '@api/shared/shared.module'
import { MongoPostRepository } from '@api/post/infrastructure/persistence/mongo/command/mongo-post.repository'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostRepository } from '@api/post/domain/post.repository'
import { CONTROLLERS } from '@api/post/infrastructure/controllers'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from '@api/post/application'

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
