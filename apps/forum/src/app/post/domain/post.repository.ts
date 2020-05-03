import { Post } from '@forum/post/domain/post'
import { PostId } from '@forum/shared/domain/post-id'

export abstract class PostRepository {
    abstract save(post: Post): Promise<void>

    abstract update(post: Post): Promise<void>

    abstract search(id: PostId): Promise<Post>

    abstract searchAll(): Promise<Array<Post>>
}
