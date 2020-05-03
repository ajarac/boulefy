import { Post } from '@api/forum/post/domain/post'
import { PostUserModel } from '@api/forum/post/domain/post-user'

export class PostResponse {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly content: string,
        public readonly counterComments: number,
        public readonly ranking: number,
        public readonly user: PostUserModel
    ) {}

    static fromAggregate(post: Post): PostResponse {
        return new PostResponse(
            post.id.value,
            post.title.value,
            post.content.value,
            post.counterComments.value,
            post.ranking.value,
            post.user.value
        )
    }
}
