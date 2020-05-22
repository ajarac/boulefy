import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { from } from 'uuid-mongodb'

import { PostResponse } from '@shared/models/post/post.response'

import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostId } from '@api/shared/domain/post/post-id'
import { PostFinder } from '@api/post/application/find/post-finder'
import { PostNotFound } from '@api/post/domain/post-not-found'

@Injectable()
export class MongoPostFinderQuery extends PostFinder {
    constructor(@InjectRepository(PostSchema) private repository: MongoRepository<PostSchema>) {
        super()
    }

    async find(id: PostId): Promise<PostResponse> {
        const postResponse: PostResponse = await this.repository
            .aggregate([
                { $match: { _id: from(id.value) } },
                {
                    $lookup: {
                        from: 'user_schema',
                        let: { userId: '$userId' },
                        pipeline: [
                            { $match: { $expr: { $eq: ['$_id', '$$userId'] } } },
                            { $project: { _id: 0, id: '$_id', username: true } }
                        ],
                        as: 'user'
                    }
                }
            ])
            .project({
                _id: 0,
                id: '$_id',
                title: true,
                content: true,
                counterComments: true,
                ranking: true,
                user: { $arrayElemAt: ['$user', 0] },
                createdDate: true,
                updatedDate: true
            })
            .next()
        if (postResponse) {
            postResponse.id = from(postResponse.id).toString()
            postResponse.user.id = from(postResponse.user.id).toString()
        } else {
            throw new PostNotFound(id)
        }
        return postResponse
    }
}
