import { CommentResponse } from '@shared/models/comment/comment.response'
import { PostId } from '@api/shared/domain/post-id'

export abstract class CommentFinderByPostId {
    abstract find(postId: PostId, page: number, limit: number): Promise<Array<CommentResponse>>
}
