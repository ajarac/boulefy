import { Inject, Injectable } from '@nestjs/common'
import { CommentRepository } from '../../domain/comment.repository'
import { PostId } from '../../../shared/domain/post-id'
import { CommentResponse } from '../comment.response'
import { Comment } from '../../domain/comment'

@Injectable()
export class CommentFinderByPostId {
    constructor(@Inject('CommentRepository') private repository: CommentRepository) {}

    async find(postId: PostId): Promise<Array<CommentResponse>> {
        const comments: Array<Comment> = await this.repository.getByPostId(postId)
        return comments.map((comment: Comment) => CommentResponse.fromAggregate(comment))
    }
}
