import { Post } from '@forum/post/domain/post'
import { PostId } from '@forum/post/domain/post-id'

export interface PostRepository {
    save(post: Post): Promise<void>

    search(id: PostId): Promise<Post>

    searchAll(): Promise<Array<Post>>
}
