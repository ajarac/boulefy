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
import { GroupId } from '@api/shared/domain/group/group-id'

export class PostMapper {
    static fromSchema(postSchema: PostSchema): Post {
        return new Post({
            id: new PostId(from(postSchema._id).toString()),
            title: new PostTitle(postSchema.title),
            content: new PostContent(postSchema.content),
            counterComments: new PostCounterComments(postSchema.counterComments),
            ranking: new PostRanking(postSchema.ranking),
            userId: new UserId(from(postSchema.userId).toString()),
            groupId: new GroupId(from(postSchema.groupId).toString()),
            createdDate: new PostCreatedDate(postSchema.createdDate),
            updatedDate: new PostUpdateDate(postSchema.updatedDate)
        })
    }

    static toSchema(post: Post): PostSchema {
        const postSchema: PostSchema = new PostSchema()
        postSchema._id = from(post.id.value)
        postSchema.title = post.title.value
        postSchema.content = post.content.value
        postSchema.counterComments = post.counterComments.value
        postSchema.ranking = post.ranking.value
        postSchema.userId = from(post.userId.value)
        postSchema.groupId = from(post.groupId.value)
        postSchema.createdDate = post.createdDate.value
        postSchema.updatedDate = post.updatedDate.value
        return postSchema
    }
}
