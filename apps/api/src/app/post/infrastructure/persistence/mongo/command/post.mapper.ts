import { from } from 'uuid-mongodb'
import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post/post-id'
import { Post } from '@api/post/domain/post'
import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { PostUpdateDate } from '@api/post/domain/post-update-date'
import { UserId } from '@api/shared/domain/user/user-id'
import { PostSchema } from '@api/post/infrastructure/persistence/mongo/post.schema'

export class PostMapper {
    static fromSchema(postSchema: PostSchema): Post {
        const id: PostId = new PostId(from(postSchema._id).toString())
        const title: PostTitle = new PostTitle(postSchema.title)
        const content: PostContent = new PostContent(postSchema.content)
        const counterComments: PostCounterComments = new PostCounterComments(postSchema.counterComments)
        const ranking: PostRanking = new PostRanking(postSchema.ranking)
        const userId: UserId = new UserId(from(postSchema.userId).toString())
        const createdDate: PostCreatedDate = new PostCreatedDate(postSchema.createdDate)
        const updatedDate: PostUpdateDate = new PostUpdateDate(postSchema.updatedDate)
        return new Post(id, title, content, counterComments, ranking, userId, createdDate, updatedDate)
    }

    static toSchema(post: Post): PostSchema {
        const postSchema: PostSchema = new PostSchema()
        postSchema._id = from(post.id.value)
        postSchema.title = post.title.value
        postSchema.content = post.content.value
        postSchema.counterComments = post.counterComments.value
        postSchema.ranking = post.ranking.value
        postSchema.userId = from(post.userId.value)
        postSchema.createdDate = post.createdDate.value
        postSchema.updatedDate = post.updateDate.value
        return postSchema
    }
}
