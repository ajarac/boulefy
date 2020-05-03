import { Comment } from '../../../domain/comment'
import { CommentSchema } from './comment.schema'
import { CommentId } from '../../../domain/comment-id'
import { CommentContent } from '../../../domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '../../../../shared/domain/post-id'
import { CommentRanking } from '../../../domain/comment-ranking'
import { from } from 'uuid-mongodb'

export class CommentMapper {
    static fromSchema(commentSchema: CommentSchema): Comment {
        const id: CommentId = new CommentId(from(commentSchema._id).toString())
        const content: CommentContent = new CommentContent(commentSchema.content)
        const userId: UserId = new UserId(commentSchema.userId)
        const postId: PostId = new PostId(commentSchema.postId)
        const ranking: CommentRanking = new CommentRanking(commentSchema.ranking)

        return new Comment(id, content, userId, postId, ranking)
    }

    static toSchema(comment: Comment): CommentSchema {
        const commentSchema: CommentSchema = new CommentSchema()
        commentSchema._id = from(comment.id.value)
        commentSchema.content = comment.content.value
        commentSchema.userId = comment.userId.value
        commentSchema.postId = comment.postId.value
        commentSchema.ranking = comment.ranking.value
        return commentSchema
    }
}
