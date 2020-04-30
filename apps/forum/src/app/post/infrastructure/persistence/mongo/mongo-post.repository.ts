import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Post, PostId, PostRepository } from '@forum/post/domain'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { PostMapper } from '@forum/post/infrastructure/persistence/mongo/post.mapper'
import { from } from 'uuid-mongodb'

@Injectable()
export class MongoPostRepository implements PostRepository {
    constructor(@InjectRepository(PostSchema) private repository: Repository<PostSchema>) {}

    async save(post: Post): Promise<void> {
        const schema: PostSchema = PostMapper.toSchema(post)
        await this.repository.save(schema)
    }

    async search(id: PostId): Promise<Post> {
        const schema: PostSchema = await this.repository.findOne({ _id: from(id.value) })
        return schema ? PostMapper.fromSchema(schema) : null
    }

    async searchAll(): Promise<Array<Post>> {
        const schemas: Array<PostSchema> = await this.repository.find()
        return schemas.map((schema: PostSchema) => PostMapper.fromSchema(schema))
    }
}
