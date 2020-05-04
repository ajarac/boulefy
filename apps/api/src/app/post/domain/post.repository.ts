import { PostId } from '@api/shared/domain/post-id'
import { Post } from '@api/post/domain/post'

export abstract class PostRepository {
    abstract save(post: Post): Promise<void>

    abstract update(post: Post): Promise<void>

    abstract search(id: PostId): Promise<Post>

    abstract searchAll(): Promise<Array<Post>>
}
