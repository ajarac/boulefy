import { Inject, Injectable } from '@nestjs/common'
import { PostRepository } from '@forum/post/domain/post.repository'
import { PostId } from '@forum/shared/domain/post-id'
import { Post } from '@forum/post/domain/post'

@Injectable()
export class IncrementCounterComment {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async increment(postId: PostId): Promise<void> {
        const post: Post = await this.repository.search(postId)

        post.incrementCounterComments()

        await this.repository.update(post)
    }
}
