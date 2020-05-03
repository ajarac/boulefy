import { PostId } from '@api/shared/domain/post-id'
import { Comment } from '@api/comment/domain/comment'

export interface CommentRepository {
    save(comment: Comment): Promise<void>

    getByPostId(postId: PostId): Promise<Array<Comment>>
}
