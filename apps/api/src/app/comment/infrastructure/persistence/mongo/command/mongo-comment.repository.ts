import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentSchema } from '@api/comment/infrastructure/persistence/mongo/comment.schema'
import { CommentRepository } from '@api/comment/domain/comment.repository'
import { CommentMapper } from '@api/comment/infrastructure/persistence/mongo/command/comment.mapper'
import { Comment } from '@api/comment/domain/comment'

@Injectable()
export class MongoCommentRepository implements CommentRepository {
    constructor(@InjectRepository(CommentSchema) private repository: Repository<CommentSchema>) {}

    async save(comment: Comment): Promise<void> {
        const schema: CommentSchema = CommentMapper.toSchema(comment)
        await this.repository.save(schema)
    }
}
