import { Comment } from '@forum/comment/domain/comment'
import { CommentSchema } from '@forum/comment/infrastructure/persistence/mongo/comment.schema'
import { CommentId } from '@forum/comment/domain/comment-id'
import { CommentContent } from '@forum/comment/domain/comment-content'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '@forum/shared/domain/post-id'
import { CommentRanking } from '@forum/comment/domain/comment-ranking'
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
