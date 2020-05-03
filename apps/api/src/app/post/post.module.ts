import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MongoPostRepository } from './infrastructure/persistence/mongo/mongo-post.repository'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from './application'
import { PostSchema } from './infrastructure/persistence/mongo/post.schema'
import { CONTROLLERS } from './infrastructure/controllers'
import { GUARDS } from './infrastructure/guards'
import { PostRepository } from './domain/post.repository'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([PostSchema])],
    controllers: [...CONTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...EVENT_HANDLERS,
        ...GUARDS,
        {
            provide: PostRepository,
            useClass: MongoPostRepository
        }
    ]
})
export class PostModule {}
