import { Comment } from '@api/comment/domain/comment'

export interface CommentRepository {
    save(comment: Comment): Promise<void>
}
