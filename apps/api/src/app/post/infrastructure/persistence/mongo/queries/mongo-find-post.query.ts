import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { from } from 'uuid-mongodb'

import { PostResponse } from '@shared/models/post/post.response'

import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostId } from '@api/shared/domain/post-id'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { PostFinder } from '@api/post/application/find/post-finder'

@Injectable()
export class MongoFindPostQuery extends PostFinder {
    constructor(@InjectRepository(PostSchema) private repository: MongoRepository<PostSchema>) {
        super()
    }

    async find(id: PostId): Promise<PostResponse> {
        return this.repository
            .aggregate([
                {
                    $match: {
                        _id: from(id.value)
                    }
                },
                {
                    $lookup: {
                        from: 'user_schema',
                        localField: 'userId',
                        foreignField: '_id',
                        as: 'user'
                    }
                }
            ])
            .next()
    }
}
