import { EventPublisher } from '@nestjs/cqrs'
import { Inject, Injectable } from '@nestjs/common'
import { CommentContent } from '@api/comment/domain/comment-content'
import { CommentRepository } from '@api/comment/domain/comment.repository'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '@api/shared/domain/post-id'
import { CommentId } from '@api/comment/domain/comment-id'
import { Comment } from '@api/comment/domain/comment'

@Injectable()
export class CommentCreator {
    constructor(@Inject('CommentRepository') private repository: CommentRepository, private publisher: EventPublisher) {}

    async create(id: CommentId, content: CommentContent, userId: UserId, postId: PostId): Promise<void> {
        const comment: Comment = this.publisher.mergeObjectContext(Comment.create(id, content, userId, postId))

        await this.repository.save(comment)

        comment.commit()
    }
}
