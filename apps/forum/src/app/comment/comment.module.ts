import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from '@forum/comment/application'
import { CommentSchema } from '@forum/comment/infrastructure/persistence/mongo/comment.schema'
import { CONTROLLERS } from '@forum/comment/infrastructure/controllers'
import { MongoCommentRepository } from '@forum/comment/infrastructure/persistence/mongo/mongo-comment.repository'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([CommentSchema])],
    controllers: [...CONTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...EVENT_HANDLERS,
        {
            provide: 'CommentRepository',
            useClass: MongoCommentRepository
        }
    ]
})
export class CommentModule {}
