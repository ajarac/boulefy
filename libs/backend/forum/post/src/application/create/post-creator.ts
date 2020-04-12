import { Injectable } from '@nestjs/common';

import {
    Post,
    PostCounterMessages,
    PostId,
    PostRanking,
    PostRepository,
    PostTitle
} from '@backend/forum/post/src/domain';

@Injectable()
export class PostCreator {

    constructor(private repository: PostRepository) {
    }

    create(id: PostId, title: PostTitle, counterMessages: PostCounterMessages, ranking: PostRanking): void {
        const post: Post = Post.create(id, title, counterMessages, ranking);

        this.repository.save(post);

        post.commit();
    }

}
