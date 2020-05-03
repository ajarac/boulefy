import { Inject } from '@nestjs/common'
import { PostNotFound } from '@forum/post/domain/post-not-found'
import { PostResponse } from '@forum/post/application/post.response'
import { PostId } from '@forum/shared/domain/post-id'
import { PostRepository } from '@forum/post/domain/post.repository'
import { Post } from '@forum/post/domain/post'

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
