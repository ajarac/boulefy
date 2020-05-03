import { Inject, Injectable } from '@nestjs/common'
import { CommentRepository } from '../../domain/comment.repository'
import { EventPublisher } from '@nestjs/cqrs'
import { CommentId } from '../../domain/comment-id'
import { CommentContent } from '../../domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '../../../shared/domain/post-id'
import { CommentRanking } from '../../domain/comment-ranking'
import { Comment } from '../../domain/comment'

@Injectable()
export class CommentCreator {
    constructor(@Inject('CommentRepository') private repository: CommentRepository, private publisher: EventPublisher) {}

    async create(id: CommentId, content: CommentContent, userId: UserId, postId: PostId, ranking: CommentRanking): Promise<void> {
        const comment: Comment = this.publisher.mergeObjectContext(Comment.create(id, content, userId, postId, ranking))

        await this.repository.save(comment)

        comment.commit()
    }
}
