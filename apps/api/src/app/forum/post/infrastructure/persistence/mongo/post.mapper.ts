import { PostSchema } from './post.schema'
import { UserId } from '@backend/shared/domain/user/user-id'
import { from } from 'uuid-mongodb'
import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'
import { Post } from '@api/forum/post/domain/post'
import { PostUser } from '@api/forum/post/domain/post-user'
import { UserName } from '@backend/shared/domain/user/user-name'

export class PostMapper {
    static fromSchema(postSchema: PostSchema): Post {
        const id: PostId = new PostId(from(postSchema._id).toString())
        const title: PostTitle = new PostTitle(postSchema.title)
        const content: PostContent = new PostContent(postSchema.content)
        const counterComments: PostCounterComments = new PostCounterComments(postSchema.counterComments)
        const ranking: PostRanking = new PostRanking(postSchema.ranking)
        const user: PostUser = new PostUser(new UserId(postSchema.user.id), new UserName(postSchema.user.username))
        return new Post(id, title, content, counterComments, ranking, user)
    }

    static toSchema(post: Post): PostSchema {
        const postSchema: PostSchema = new PostSchema()
        postSchema._id = from(post.id.value)
        postSchema.title = post.title.value
        postSchema.content = post.content.value
        postSchema.counterComments = post.counterComments.value
        postSchema.ranking = post.ranking.value
        const { id, username } = post.user.value
        postSchema.user = { id, username }
        return postSchema
    }
}
