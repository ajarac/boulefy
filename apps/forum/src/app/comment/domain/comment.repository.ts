import { PostId } from '@forum/shared/domain/post-id'
import { Comment } from '@forum/comment/domain/comment'

export interface CommentRepository {
    save(comment: Comment): Promise<void>

    getByPostId(postId: PostId): Promise<Array<Comment>>
}
