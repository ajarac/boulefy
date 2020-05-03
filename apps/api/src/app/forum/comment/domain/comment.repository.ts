import { PostId } from '../../shared/domain/post-id'
import { Comment } from './comment'

export interface CommentRepository {
    save(comment: Comment): Promise<void>

    getByPostId(postId: PostId): Promise<Array<Comment>>
}
