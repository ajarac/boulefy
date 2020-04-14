import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { POST_MAPPER } from '@forum-api/post/infrastructure/persistence/mongo/post.mapper'
import { PostRepository } from '@forum-api/post/domain'
import { PostSchema } from '@forum-api/post/infrastructure/persistence/mongo/post.schema'

@Injectable()
export class MongoPostRepository extends PostRepository {
    constructor(@InjectRepository(PostSchema) repository: Repository<PostSchema>) {
        super(repository, POST_MAPPER)
    }
}
