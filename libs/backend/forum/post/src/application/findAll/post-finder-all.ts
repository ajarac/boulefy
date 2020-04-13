import { Injectable } from '@nestjs/common';
import { Post, PostRepository } from '@backend/forum/post/domain';
import { PostResponse } from '@backend/forum/post/application/post.response';

@Injectable()
export class PostFinderAll {

    constructor(private repository: PostRepository) {
    }

    async findAll(): Promise<Array<PostResponse>> {
        const postList: Array<Post> = await this.repository.searchAll();
        return postList.map((post: Post) => PostResponse.fromAggregate(post));
    }

}
