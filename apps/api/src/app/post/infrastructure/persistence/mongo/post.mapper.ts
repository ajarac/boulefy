import { PostSchema } from './post.schema'
import { UserId } from '@backend/shared/domain/user/user-id'
import { from } from 'uuid-mongodb'
import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post-id'
import { Post } from '@api/post/domain/post'

export class PostMapper {
    static fromSchema(postSchema: PostSchema): Post {
        const id: PostId = new PostId(from(postSchema._id).toString())
        const title: PostTitle = new PostTitle(postSchema.title)
        const content: PostContent = new PostContent(postSchema.content)
        const counterComments: PostCounterComments = new PostCounterComments(postSchema.counterComments)
        const ranking: PostRanking = new PostRanking(postSchema.ranking)
        const userId: UserId = new UserId(from(postSchema.userId).toString())
        return new Post(id, title, content, counterComments, ranking, userId)
    }

    static toSchema(post: Post): PostSchema {
        const postSchema: PostSchema = new PostSchema()
        postSchema._id = from(post.id.value)
        postSchema.title = post.title.value
        postSchema.content = post.content.value
        postSchema.counterComments = post.counterComments.value
        postSchema.ranking = post.ranking.value
        postSchema.userId = from(post.userId.value)
        return postSchema
    }
}
