import { Injectable } from '@nestjs/common'
import { PostFinderAll } from '@api/post/application/findAll/post-finder-all'
import { MongoRepository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'
import { PostResponse } from '@shared/models/post/post.response'
import { Pagination } from '@shared/models/pagination/pagination'
import { from } from 'uuid-mongodb'

@Injectable()
export class MongoPostFinderAllQuery extends PostFinderAll {
    constructor(@InjectRepository(PostSchema) private repository: MongoRepository<PostSchema>) {
        super()
    }

    async findAll(page = 1, limit = 25): Promise<Pagination<PostResponse>> {
        const pagination: Pagination<PostResponse> = await this.repository
            .aggregate([
                {
                    $facet: {
                        metadata: [{ $count: 'total' }, { $addFields: { page, limit } }],
                        results: [
                            { $skip: limit * (page - 1) },
                            { $limit: limit },
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
                            },
                            {
                                $project: {
                                    _id: 0,
                                    id: '$_id',
                                    title: true,
                                    content: true,
                                    counterComments: true,
                                    ranking: true,
                                    user: { $arrayElemAt: ['$user', 0] },
                                    createdDate: true,
                                    updatedDate: true
                                }
                            }
                        ]
                    }
                }
            ])
            .project({
                metadata: { $arrayElemAt: ['$metadata', 0] },
                results: true
            })
            .next()

        pagination.results.forEach((postResponse: PostResponse) => {
            postResponse.id = from(postResponse.id).toString()
            postResponse.user.id = from(postResponse.user.id).toString()
        })

        return pagination
    }
}
