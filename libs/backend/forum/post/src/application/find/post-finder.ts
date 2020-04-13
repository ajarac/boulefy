import { PostId } from '@backend/forum/post/domain/post-id';
import { PostRepository } from '@backend/forum/post/domain/post.repository';
import { Post } from '@backend/forum/post/domain/post';
import { PostNotFound } from '@backend/forum/post/domain/post-not-found';

export class PostFinder {
    constructor(private repository: PostRepository) {
    }

    async find(id: PostId): Promise<Post> {
        return this.repository.search(id).catch(() => {
            throw new PostNotFound(id);
        });
    }
}
