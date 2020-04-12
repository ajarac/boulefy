import { Injectable } from '@nestjs/common';
import { Post, PostRepository } from '@backend/forum/post/src/domain';
import { PostResponse } from '@backend/forum/post/src/application/post.response';

@Injectable()
export class PostFinder {

    constructor(private repository: PostRepository) {
    }

    find(): Array<PostResponse> {
        return this.repository.searchAll()
            .map((post: Post) => PostResponse.fromAggregate(post));
    }

}
