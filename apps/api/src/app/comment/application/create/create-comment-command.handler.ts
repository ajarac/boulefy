import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CommentCreator } from '@api/comment/application/create/comment.creator'
import { CommentContent } from '@api/comment/domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { CommentRanking } from '@api/comment/domain/comment-ranking'
import { CreateCommentCommand } from '@api/comment/application/create/create-comment-command'
import { PostId } from '@api/shared/domain/post-id'
import { CommentId } from '@api/comment/domain/comment-id'


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
