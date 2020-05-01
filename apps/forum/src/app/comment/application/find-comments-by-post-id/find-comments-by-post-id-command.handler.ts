import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { FindCommentsByPostIdCommand } from '@forum/comment/application/find-comments-by-post-id/find-comments-by-post-id-command'
import { CommentFinderByPostId } from '@forum/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { CommentResponse } from '@forum/comment/application/comment.response'
import { PostId } from '@forum/shared/domain/post-id'

@CommandHandler(FindCommentsByPostIdCommand)
export class FindCommentsByPostIdCommandHandler implements ICommandHandler<FindCommentsByPostIdCommand> {
    constructor(private commentFinderByPostId: CommentFinderByPostId) {}

    execute(command: FindCommentsByPostIdCommand): Promise<Array<CommentResponse>> {
        const postId: PostId = new PostId(command.id)
        return this.commentFinderByPostId.find(postId)
    }
}
