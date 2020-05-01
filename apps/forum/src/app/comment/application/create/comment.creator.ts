import { Inject, Injectable } from '@nestjs/common'
import { CommentRepository } from '@forum/comment/domain/comment.repository'
import { EventPublisher } from '@nestjs/cqrs'
import { CommentId } from '@forum/comment/domain/comment-id'
import { CommentContent } from '@forum/comment/domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '@forum/shared/domain/post-id'
import { CommentRanking } from '@forum/comment/domain/comment-ranking'
import { Comment } from '@forum/comment/domain/comment'

@Injectable()
export class CommentCreator {
    constructor(@Inject('CommentRepository') private repository: CommentRepository, private publisher: EventPublisher) {}

    async create(id: CommentId, content: CommentContent, userId: UserId, postId: PostId, ranking: CommentRanking): Promise<void> {
        const comment: Comment = this.publisher.mergeObjectContext(Comment.create(id, content, userId, postId, ranking))

        await this.repository.save(comment)

        comment.commit()
    }
}
