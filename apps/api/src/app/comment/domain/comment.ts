import { AggregateRoot } from '@nestjs/cqrs'
import { CommentContent } from '@api/comment/domain/comment-content'
import { CommentRanking } from '@api/comment/domain/comment-ranking'
import { PostId } from '@api/shared/domain/post/post-id'
import { CommentId } from '@api/comment/domain/comment-id'
import { CommentCreatedDate } from '@api/comment/domain/comment-created-date'
import { CommentUpdatedDate } from '@api/comment/domain/comment-updated-date'
import { UserId } from '@api/shared/domain/user/user-id'
import { CommentCreatedEvent } from '@api/shared/domain/comment/comment-created-event'

export class Comment extends AggregateRoot {
    constructor(
        private _id: CommentId,
        private _content: CommentContent,
        private _userId: UserId,
        private _postId: PostId,
        private _ranking: CommentRanking,
        private _createdDate: CommentCreatedDate,
        private _updatedDate: CommentUpdatedDate
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

    get createdDate(): CommentCreatedDate {
        return this._createdDate
    }

    get updatedDate(): CommentUpdatedDate {
        return this._updatedDate
    }

    public static create(id: CommentId, content: CommentContent, userId: UserId, postId: PostId): Comment {
        const ranking: CommentRanking = CommentRanking.create()
        const createdDate: CommentCreatedDate = CommentCreatedDate.create()
        const updatedDate: CommentUpdatedDate = CommentUpdatedDate.create()
        const comment: Comment = new Comment(id, content, userId, postId, ranking, createdDate, updatedDate)

        comment.apply(new CommentCreatedEvent(id.value, content.value, userId.value, postId.value, ranking.value))

        return comment
    }
}
