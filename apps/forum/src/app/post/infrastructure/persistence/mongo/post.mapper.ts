import { Post, PostContent, PostCounterComments, PostId, PostRanking, PostTitle } from '@forum/post/domain'
import { PostSchema } from '@forum/post/infrastructure/persistence/mongo/post.schema'
import { UserId } from '@backend/shared/domain/user/user-id'
import { from } from 'uuid-mongodb'

export class PostMapper {
    static fromSchema(postSchema: PostSchema): Post {
        const id: PostId = new PostId(from(postSchema._id).toString())
        const title: PostTitle = new PostTitle(postSchema.title)
        const content: PostContent = new PostContent(postSchema.content)
        const counterComments: PostCounterComments = new PostCounterComments(postSchema.counterComments)
        const ranking: PostRanking = new PostRanking(postSchema.ranking)
        const userId: UserId = new UserId(postSchema.userId)
        return new Post(id, title, content, counterComments, ranking, userId)
    }

    static toSchema(post: Post): PostSchema {
        const postSchema: PostSchema = new PostSchema()
        postSchema._id = from(post.id.value)
        postSchema.title = post.title.value
        postSchema.content = post.content.value
        postSchema.counterComments = post.counterComments.value
        postSchema.ranking = post.ranking.value
        postSchema.userId = post.userId.value
        return postSchema
    }
}
