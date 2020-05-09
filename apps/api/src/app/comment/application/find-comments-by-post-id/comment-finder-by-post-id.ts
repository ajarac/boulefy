import { CommentResponse } from '@shared/models/comment/comment.response'
import { PostId } from '@api/shared/domain/post-id'
import { Pagination } from '@shared/models/pagination/pagination'

export abstract class CommentFinderByPostId {
    abstract find(postId: PostId, page: number, limit: number): Promise<Pagination<CommentResponse>>
}
