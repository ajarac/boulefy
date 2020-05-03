import { EventPublisher } from '@nestjs/cqrs'
import { Inject, Injectable } from '@nestjs/common'
import { CommentContent } from '@api/forum/comment/domain/comment-content'
import { CommentRepository } from '@api/forum/comment/domain/comment.repository'
import { UserId } from '@backend/shared/domain/user/user-id'
import { CommentRanking } from '@api/forum/comment/domain/comment-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'
import { CommentId } from '@api/forum/comment/domain/comment-id'
import { Comment } from '@api/forum/comment/domain/comment'


@Injectable()
export class CommentCreator {
    constructor(@Inject('CommentRepository') private repository: CommentRepository, private publisher: EventPublisher) {}

    async create(id: CommentId, content: CommentContent, userId: UserId, postId: PostId, ranking: CommentRanking): Promise<void> {
        const comment: Comment = this.publisher.mergeObjectContext(Comment.create(id, content, userId, postId, ranking))

        await this.repository.save(comment)

        comment.commit()
    }
}
