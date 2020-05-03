import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentSchema } from '@api/comment/infrastructure/persistence/mongo/comment.schema'
import { MongoCommentRepository } from '@api/comment/infrastructure/persistence/mongo/mongo-comment.repository'

import { CONTROLLERS } from '@api/comment/infrastructure/controllers'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, QUERY_HANDLERS } from '@api/comment/application'

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
