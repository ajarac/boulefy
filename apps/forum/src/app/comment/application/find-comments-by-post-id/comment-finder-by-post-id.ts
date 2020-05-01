import { Inject, Injectable } from '@nestjs/common'
import { CommentRepository } from '@forum/comment/domain/comment.repository'
import { PostId } from '@forum/shared/domain/post-id'
import { CommentResponse } from '@forum/comment/application/comment.response'
import { Comment } from '@forum/comment/domain/comment'

@Injectable()
export class CommentFinderByPostId {
    constructor(@Inject('CommentRepository') private repository: CommentRepository) {}

    async find(postId: PostId): Promise<Array<CommentResponse>> {
        const comments: Array<Comment> = await this.repository.getByPostId(postId)
        return comments.map((comment: Comment) => CommentResponse.fromAggregate(comment))
    }
}
