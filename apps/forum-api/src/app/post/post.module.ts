import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CONTROLLERS } from '@forum-api/post/infrastructure/controller'
import { PostRepository } from '@forum-api/post/domain'
import { MongoPostRepository } from '@forum-api/post/infrastructure/persistence/mongo/mongo-post.repository'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, QUERY_HANDLERS } from '@forum-api/post/application'
import { PostSchema } from '@forum-api/post/infrastructure/persistence/mongo/post.schema'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([PostSchema])],
    controllers: [...CONTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        {
            provide: PostRepository,
            useClass: MongoPostRepository
        }
    ]
})
export class PostModule {}
