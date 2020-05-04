import { PostRepository } from '@api/post/domain/post.repository'
import { Injectable } from '@nestjs/common'
import { Post } from '@api/post/domain/post'
import { PostResponse } from '@shared/models/post/post.response'

@Injectable()
export class PostFinderAll {
    constructor(private repository: PostRepository) {}

    async findAll(): Promise<Array<PostResponse>> {
        const postList: Array<Post> = await this.repository.searchAll()
        return postList as any
    }
}
