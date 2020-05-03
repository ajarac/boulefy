import { Inject, Injectable } from '@nestjs/common'
import { PostRepository } from '../../domain/post.repository'
import { PostId } from '../../../shared/domain/post-id'
import { Post } from '../../domain/post'

@Injectable()
export class IncrementCounterComment {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async increment(postId: PostId): Promise<void> {
        const post: Post = await this.repository.search(postId)

        post.incrementCounterComments()

        await this.repository.update(post)
    }
}
