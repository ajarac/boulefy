import { from } from 'uuid-mongodb'
import { CommentSchema } from '@api/comment/infrastructure/persistence/mongo/comment.schema'
import { CommentContent } from '@api/comment/domain/comment-content'
import { CommentRanking } from '@api/comment/domain/comment-ranking'
import { PostId } from '@api/shared/domain/post/post-id'
import { CommentId } from '@api/comment/domain/comment-id'
import { Comment } from '@api/comment/domain/comment'
import { CommentCreatedDate } from '@api/comment/domain/comment-created-date'
import { CommentUpdatedDate } from '@api/comment/domain/comment-updated-date'
import { UserId } from '@api/shared/domain/user/user-id'

export class CommentMapper {
    static fromSchema(commentSchema: CommentSchema): Comment {
        const id: CommentId = new CommentId(from(commentSchema._id).toString())
        const content: CommentContent = new CommentContent(commentSchema.content)
        const userId: UserId = new UserId(from(commentSchema.userId).toString())
        const postId: PostId = new PostId(from(commentSchema.postId).toString())
        const ranking: CommentRanking = new CommentRanking(commentSchema.ranking)
        const createdDate: CommentCreatedDate = new CommentCreatedDate(commentSchema.createdDate)
        const updatedDate: CommentUpdatedDate = new CommentUpdatedDate(commentSchema.updatedDate)
        return new Comment(id, content, userId, postId, ranking, createdDate, updatedDate)
    }

    static toSchema(comment: Comment): CommentSchema {
        const commentSchema: CommentSchema = new CommentSchema()
        commentSchema._id = from(comment.id.value)
        commentSchema.content = comment.content.value
        commentSchema.userId = from(comment.userId.value)
        commentSchema.postId = from(comment.postId.value)
        commentSchema.ranking = comment.ranking.value
        commentSchema.createdDate = comment.createdDate.value
        commentSchema.updatedDate = comment.updatedDate.value
        return commentSchema
    }
}
