import { Post } from '@forum/post/domain'

export class PostResponse {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly counterComments: number,
        public readonly ranking: number,
        public readonly userId: string
    ) {}

    static fromAggregate(post: Post): PostResponse {
        return new PostResponse(post.id.value, post.title.value, post.counterComments.value, post.ranking.value, post.userId.value)
    }
}
