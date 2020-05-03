import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentSchema } from '@api/forum/comment/infrastructure/persistence/mongo/comment.schema'
import { CommentRepository } from '@api/forum/comment/domain/comment.repository'
import { CommentMapper } from '@api/forum/comment/infrastructure/persistence/mongo/comment.mapper'
import { PostId } from '@api/forum/shared/domain/post-id'
import { Comment } from '@api/forum/comment/domain/comment'

@Injectable()
export class MongoCommentRepository implements CommentRepository {
    constructor(@InjectRepository(CommentSchema) private repository: Repository<CommentSchema>) {}

    async getByPostId(postId: PostId): Promise<Array<Comment>> {
        const schemas: Array<CommentSchema> = await this.repository.find({ postId: postId.value })
        return schemas.map((schema: CommentSchema) => CommentMapper.fromSchema(schema))
    }

    async save(comment: Comment): Promise<void> {
        const schema: CommentSchema = CommentMapper.toSchema(comment)
        await this.repository.save(schema)
    }
}
