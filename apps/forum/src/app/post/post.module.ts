import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MongoPostRepository } from '@forum/post/infrastructure/persistence/mongo/mongo-post.repository'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLER, QUERY_HANDLERS } from '@forum/post/application'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { CONTROLLERS } from '@forum/post/infrastructure/controllers'
import { GUARDS } from '@forum/post/infrastructure/guards'

@Module({
    imports: [ CqrsModule, TypeOrmModule.forFeature([ PostSchema ]) ],
    controllers: [ ...CONTROLLERS ],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...EVENT_HANDLER,
        ...GUARDS,
        {
            provide: 'PostRepository',
            useClass: MongoPostRepository
        }
    ]
})
export class PostModule {
}
