import { PostNotFound } from '@api/post/domain/post-not-found'
import { PostId } from '@api/shared/domain/post-id'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostResponse } from '@api/post/application/post.response'
import { Post } from '@api/post/domain/post'

export class PostFinder {
    constructor(private repository: PostRepository) {}

    async find(id: PostId): Promise<PostResponse> {
        const post: Post = await this.repository.search(id)
        if (!post) {
            throw new PostNotFound(id)
        }
        return PostResponse.fromAggregate(post)
    }
}
