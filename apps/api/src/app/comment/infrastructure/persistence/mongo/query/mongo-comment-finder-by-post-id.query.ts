import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { CommentFinderByPostId } from '@api/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { CommentSchema } from '@api/comment/infrastructure/persistence/mongo/comment.schema'
import { PostId } from '@api/shared/domain/post-id'
import { CommentResponse } from '@shared/models/comment/comment.response'
import { from } from 'uuid-mongodb'
import { Pagination } from '@shared/models/pagination/pagination'

@Injectable()
export class MongoCommentFinderByPostIdQuery extends CommentFinderByPostId {
    constructor(@InjectRepository(CommentSchema) private repository: MongoRepository<CommentSchema>) {
        super()
    }

    async find(postId: PostId, page: number, limit: number): Promise<Pagination<CommentResponse>> {
        const comments: Pagination<CommentResponse> = await this.repository
            .aggregate([
                {
                    $facet: {
                        metadata: [{ $match: { postId: from(postId.value) } }, { $count: 'total' }, { $addFields: { page, limit } }],
                        results: [
                            { $match: { postId: from(postId.value) } },
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
                                    content: true,
                                    user: { $arrayElemAt: ['$user', 0] },
                                    postId: true,
                                    ranking: true,
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
        comments.results.forEach((comment: CommentResponse) => {
            comment.id = from(comment.id).toString()
            comment.user.id = from(comment.user.id).toString()
            comment.postId = from(comment.postId).toString()
        })
        return comments
    }
}
