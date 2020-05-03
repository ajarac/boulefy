import { PostId } from '@api/forum/shared/domain/post-id'
import { Comment } from '@api/forum/comment/domain/comment'

export interface CommentRepository {
    save(comment: Comment): Promise<void>

    getByPostId(postId: PostId): Promise<Array<Comment>>
}
