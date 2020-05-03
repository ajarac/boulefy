import { Injectable } from '@nestjs/common'
import { PostId } from '@api/shared/domain/post-id'
import { PostRepository } from '@api/post/domain/post.repository'
import { Post } from '@api/post/domain/post'

@Injectable()
export class IncrementCounterComment {
    constructor(private repository: PostRepository) {}

    async increment(postId: PostId): Promise<void> {
        const post: Post = await this.repository.search(postId)

        post.incrementCounterComments()

        await this.repository.update(post)
    }
}
