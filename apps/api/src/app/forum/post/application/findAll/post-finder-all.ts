import { Inject, Injectable } from '@nestjs/common';
import { PostRepository } from '@api/forum/post/domain/post.repository'
import { PostResponse } from '@api/forum/post/application/post.response'
import { Post } from '@api/forum/post/domain/post'

@Injectable()
export class PostFinderAll {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async findAll(): Promise<Array<PostResponse>> {
        const postList: Array<Post> = await this.repository.searchAll()
        return postList.map((post: Post) => PostResponse.fromAggregate(post))
    }
}
