import { CommentFinderByPostId } from '@api/comment/application/find-comments-by-post-id/comment-finder-by-post-id'
import { MongoCommentFinderByPostIdQuery } from '@api/comment/infrastructure/persistence/mongo/query/mongo-comment-finder-by-post-id.query'

export const QUERIES = [
    {
        provide: CommentFinderByPostId,
        useClass: MongoCommentFinderByPostIdQuery
    }
]
