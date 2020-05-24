import { EventPublisher } from '@nestjs/cqrs'
import { Inject, Injectable } from '@nestjs/common'
import { CommentRepository } from '@api/comment/domain/comment.repository'
import { Comment, CommentCreateArgs } from '@api/comment/domain/comment'

@Injectable()
export class CommentCreator {
    constructor(@Inject('CommentRepository') private repository: CommentRepository, private publisher: EventPublisher) {}

    async create(commentCreate: CommentCreateArgs): Promise<void> {
        const comment: Comment = this.publisher.mergeObjectContext(Comment.create(commentCreate))

        await this.repository.save(comment)

        comment.commit()
    }
}
