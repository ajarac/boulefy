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
        return new Comment({
            id: new CommentId(from(commentSchema._id).toString()),
            content: new CommentContent(commentSchema.content),
            userId: new UserId(from(commentSchema.userId).toString()),
            postId: new PostId(from(commentSchema.postId).toString()),
            ranking: new CommentRanking(commentSchema.ranking),
            createdDate: new CommentCreatedDate(commentSchema.createdDate),
            updatedDate: new CommentUpdatedDate(commentSchema.updatedDate)
        })
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
