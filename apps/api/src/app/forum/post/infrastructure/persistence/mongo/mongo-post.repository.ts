import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PostSchema } from './post.schema'
import { PostMapper } from './post.mapper'
import { from } from 'uuid-mongodb'
import { PostId } from '../../../../shared/domain/post-id'
import { PostRepository } from '../../../domain/post.repository'
import { Post } from '../../../domain/post'

@Injectable()
export class MongoPostRepository extends PostRepository {
    constructor(@InjectRepository(PostSchema) private repository: Repository<PostSchema>) {
        super()
    }

    async save(post: Post): Promise<void> {
        const schema: PostSchema = PostMapper.toSchema(post)
        await this.repository.save(schema)
    }

    async update(post: Post): Promise<void> {
        const schema: PostSchema = PostMapper.toSchema(post)
        await this.repository.update({ _id: schema._id }, schema)
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
