import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { CommentCreator } from '@api/comment/application/create/comment.creator'
import { CommentContent } from '@api/comment/domain/comment-content'
import { CreateCommentCommand } from '@api/comment/application/create/create-comment-command'
import { PostId } from '@api/shared/domain/post/post-id'
import { CommentId } from '@api/comment/domain/comment-id'
import { UserId } from '@api/shared/domain/user/user-id'

@CommandHandler(CreateCommentCommand)
export class CreateCommentCommandHandler implements ICommandHandler<CreateCommentCommand> {
    constructor(private commentCreator: CommentCreator) {}

    execute(command: CreateCommentCommand): Promise<void> {
        const id: CommentId = new CommentId(command.id)
        const content: CommentContent = new CommentContent(command.content)
        const userId: UserId = new UserId(command.userId)
        const postId: PostId = new PostId(command.postId)

        return this.commentCreator.create({ id, content, userId, postId })
    }
}
