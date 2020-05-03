import { Inject } from '@nestjs/common'
import { PostNotFound } from '../../domain/post-not-found'
import { PostResponse } from '../post.response'
import { PostId } from '../../../shared/domain/post-id'
import { PostRepository } from '../../domain/post.repository'
import { Post } from '../../domain/post'

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
