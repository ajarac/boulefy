import { PostId } from '@backend/forum/post/domain/post-id';
import { Post } from '@backend/forum/post/domain/post';

export abstract class PostRepository {
    abstract save(post: Post): Promise<void>;

    abstract search(id: PostId): Promise<Post>

    abstract searchAll(): Promise<Array<Post>>
}
