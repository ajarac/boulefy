import { Inject, Injectable } from '@nestjs/common';
import { PostResponse } from '@forum/post/application/post.response'
import { PostRepository } from '@forum/post/domain/post.repository'
import { Post } from '@forum/post/domain/post'

@Injectable()
export class PostFinderAll {
    constructor(@Inject('PostRepository') private repository: PostRepository) {}

    async findAll(): Promise<Array<PostResponse>> {
        const postList: Array<Post> = await this.repository.searchAll()
        return postList.map((post: Post) => PostResponse.fromAggregate(post))
    }
}
