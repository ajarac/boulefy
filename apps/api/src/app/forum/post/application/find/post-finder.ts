import { Inject } from '@nestjs/common'
import { PostNotFound } from '@api/forum/post/domain/post-not-found'
import { PostId } from '@api/forum/shared/domain/post-id'
import { PostRepository } from '@api/forum/post/domain/post.repository'
import { PostResponse } from '@api/forum/post/application/post.response'
import { Post } from '@api/forum/post/domain/post'

export class PostFinder {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async find(id: PostId): Promise<PostResponse> {
        const post: Post = await this.repository.search(id)
        if (!post) {
            throw new PostNotFound(id)
        }
        return PostResponse.fromAggregate(post)
    }
}
