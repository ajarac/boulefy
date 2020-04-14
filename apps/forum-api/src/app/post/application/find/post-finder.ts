import { PostNotFound } from '@forum-api/post/domain/post-not-found'
import { Post, PostId, PostRepository } from '@forum-api/post/domain'
import { PostResponse } from '@forum-api/post/application/post.response'

export class PostFinder {
    constructor(private repository: PostRepository) {}

    async find(id: PostId): Promise<PostResponse> {
        const post: Post = await this.repository.search(id).catch(() => {
            throw new PostNotFound(id)
        })
        return PostResponse.fromAggregate(post)
    }
}
