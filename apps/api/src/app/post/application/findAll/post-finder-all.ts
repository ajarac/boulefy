import { Injectable } from '@nestjs/common'
import { PostRepository } from '@api/post/domain/post.repository'
import { PostResponse } from '@api/post/application/post.response'
import { Post } from '@api/post/domain/post'

@Injectable()
export class PostFinderAll {
    constructor(private repository: PostRepository) {}

    async findAll(): Promise<Array<PostResponse>> {
        const postList: Array<Post> = await this.repository.searchAll()
        return postList.map((post: Post) => PostResponse.fromAggregate(post))
    }
}
