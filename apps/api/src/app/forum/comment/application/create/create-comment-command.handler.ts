import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CreateCommentCommand } from './create-comment-command'
import { CommentCreator } from './comment.creator'
import { CommentId } from '../../domain/comment-id'
import { CommentContent } from '../../domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '../../../shared/domain/post-id'
import { CommentRanking } from '../../domain/comment-ranking'

@CommandHandler(CreateCommentCommand)
export class CreateCommentCommandHandler implements ICommandHandler<CreateCommentCommand> {
    constructor(private commentCreator: CommentCreator) {}

    execute(command: CreateCommentCommand): Promise<void> {
        const id: CommentId = new CommentId(command.id)
        const content: CommentContent = new CommentContent(command.content)
        const userId: UserId = new UserId(command.userId)
        const postId: PostId = new PostId(command.postId)
        const ranking: CommentRanking = new CommentRanking(0)

        return this.commentCreator.create(id, content, userId, postId, ranking)
    }
}
