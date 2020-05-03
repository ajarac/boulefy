import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { FindCommentsByPostIdQuery } from '@forum/comment/application/find-comments-by-post-id/find-comments-by-post-id-query'
import { CommentFinderByPostId } from '@forum/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { CommentResponse } from '@forum/comment/application/comment.response'
import { PostId } from '@forum/shared/domain/post-id'

@QueryHandler(FindCommentsByPostIdQuery)
export class FindCommentsByPostIdQueryHandler implements IQueryHandler<FindCommentsByPostIdQuery> {
    constructor(private commentFinderByPostId: CommentFinderByPostId) {}

    execute(command: FindCommentsByPostIdQuery): Promise<Array<CommentResponse>> {
        const postId: PostId = new PostId(command.id)
        return this.commentFinderByPostId.find(postId)
    }
}
