import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { CommentFinderByPostId } from '@api/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { FindCommentsByPostIdQuery } from '@api/comment/application/find-comments-by-post-id/find-comments-by-post-id-query'
import { PostId } from '@api/shared/domain/post-id'
import { CommentResponse } from '@shared/models/comment/comment.response'


@QueryHandler(FindCommentsByPostIdQuery)
export class FindCommentsByPostIdQueryHandler implements IQueryHandler<FindCommentsByPostIdQuery> {
    constructor(private commentFinderByPostId: CommentFinderByPostId) {}

    execute(command: FindCommentsByPostIdQuery): Promise<Array<CommentResponse>> {
        const postId: PostId = new PostId(command.id)
        return this.commentFinderByPostId.find(postId)
    }
}
