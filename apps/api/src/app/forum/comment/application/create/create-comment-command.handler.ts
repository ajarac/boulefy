import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CommentCreator } from '@api/forum/comment/application/create/comment.creator'
import { CommentContent } from '@api/forum/comment/domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { CommentRanking } from '@api/forum/comment/domain/comment-ranking'
import { CreateCommentCommand } from '@api/forum/comment/application/create/create-comment-command'
import { PostId } from '@api/forum/shared/domain/post-id'
import { CommentId } from '@api/forum/comment/domain/comment-id'


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
