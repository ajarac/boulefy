import { AggregateRoot } from '@nestjs/cqrs'
import { CommentId } from '@forum/comment/domain/comment-id'
import { CommentContent } from '@forum/comment/domain/comment-content'
import { CommentRanking } from '@forum/comment/domain/comment-ranking'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostId } from '@forum/shared/domain/post-id'
import { CommentCreatedEvent } from '@backend/shared/domain/comment/comment-created-event'

export class Comment extends AggregateRoot {
    constructor(
        private _id: CommentId,
        private _content: CommentContent,
        private _userId: UserId,
        private _postId: PostId,
        private _ranking: CommentRanking
    ) {
        super()
    }

    get id(): CommentId {
        return this._id
    }

    get content(): CommentContent {
        return this._content
    }

    get userId(): UserId {
        return this._userId
    }

    get postId(): PostId {
        return this._postId
    }

    get ranking(): CommentRanking {
        return this._ranking
    }

    public static create(id: CommentId, content: CommentContent, userId: UserId, postId: PostId, ranking: CommentRanking): Comment {
        const comment: Comment = new Comment(id, content, userId, postId, ranking)

        comment.apply(new CommentCreatedEvent(id.value, content.value, userId.value, postId.value, ranking.value))

        return comment
    }
}
