import { Post } from '@backend/forum/post/domain';


export class PostResponse {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly counterMessages: number,
        public readonly ranking: number
    ) {
    }

    static fromAggregate(post: Post): PostResponse {
        return new PostResponse(post.id.value, post.title.value, post.counterMessages.value, post.ranking.value);
    }
}
