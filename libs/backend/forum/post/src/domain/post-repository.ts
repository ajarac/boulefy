import { Post } from './post';
import { PostId } from './post-id';

export abstract class PostRepository {
    abstract save(post: Post): void;

    abstract search(id: PostId): Post

    abstract searchAll(): Array<Post>
}
