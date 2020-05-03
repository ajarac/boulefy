import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { FindCommentsByPostIdQuery } from './find-comments-by-post-id-query'
import { CommentFinderByPostId } from './comment-finder-by-post-id'
import { CommentResponse } from '../comment.response'
import { PostId } from '../../../shared/domain/post-id'

@QueryHandler(FindCommentsByPostIdQuery)
export class FindCommentsByPostIdQueryHandler implements IQueryHandler<FindCommentsByPostIdQuery> {
    constructor(private commentFinderByPostId: CommentFinderByPostId) {}

    execute(command: FindCommentsByPostIdQuery): Promise<Array<CommentResponse>> {
        const postId: PostId = new PostId(command.id)
        return this.commentFinderByPostId.find(postId)
    }
}
