import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentSchema } from '@api/forum/comment/infrastructure/persistence/mongo/comment.schema'
import { MongoCommentRepository } from '@api/forum/comment/infrastructure/persistence/mongo/mongo-comment.repository'

import { CONTROLLERS } from '@api/forum/comment/infrastructure/controllers'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, QUERY_HANDLERS } from '@api/forum/comment/application'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([CommentSchema])],
    controllers: [...CONTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        {
            provide: 'CommentRepository',
            useClass: MongoCommentRepository
        }
    ]
})
export class CommentModule {}
