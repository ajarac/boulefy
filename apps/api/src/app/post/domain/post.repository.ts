import { Post } from './post'
import { PostId } from '../../shared/domain/post-id'

export abstract class PostRepository {
    abstract save(post: Post): Promise<void>

    abstract update(post: Post): Promise<void>

    abstract search(id: PostId): Promise<Post>

    abstract searchAll(): Promise<Array<Post>>
}
