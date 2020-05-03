import { Comment } from '../domain/comment'

export class CommentResponse {
    constructor(
        public readonly id: string,
        public readonly content: string,
        public readonly userId: string,
        public readonly postId: string,
        public readonly ranking: number
    ) {}

    static fromAggregate(comment: Comment): CommentResponse {
        return new CommentResponse(
            comment.id.value,
            comment.content.value,
            comment.userId.value,
            comment.postId.value,
            comment.ranking.value
        )
    }
}
