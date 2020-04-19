import { Inject } from '@nestjs/common'
import { PostNotFound } from '@forum/post/domain/post-not-found'
import { Post, PostId, PostRepository } from '@forum/post/domain'
import { PostResponse } from '@forum/post/application/post.response'

export class PostFinder {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async find(id: PostId): Promise<PostResponse> {
        const post: Post = await this.repository.search(id).catch(() => {
            throw new PostNotFound(id)
        })
        return PostResponse.fromAggregate(post)
    }
}
