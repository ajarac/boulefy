import { AggregateRoot } from '@nestjs/cqrs'
import { CommentContent } from '@api/comment/domain/comment-content'
import { CommentRanking } from '@api/comment/domain/comment-ranking'
import { PostId } from '@api/shared/domain/post/post-id'
import { CommentId } from '@api/comment/domain/comment-id'
import { CommentCreatedDate } from '@api/comment/domain/comment-created-date'
import { CommentUpdatedDate } from '@api/comment/domain/comment-updated-date'
import { UserId } from '@api/shared/domain/user/user-id'
import { CommentCreatedEvent } from '@api/shared/domain/comment/comment-created-event'

export interface CommentArgs {
    id: CommentId
    content: CommentContent
    userId: UserId
    postId: PostId
    ranking: CommentRanking
    createdDate: CommentCreatedDate
    updatedDate: CommentUpdatedDate
}

export interface CommentCreateArgs {
    id: CommentId
    content: CommentContent
    userId: UserId
    postId: PostId
}

export class Comment extends AggregateRoot {
    private readonly _id: CommentId
    private readonly _content: CommentContent
    private readonly _userId: UserId
    private readonly _postId: PostId
    private readonly _ranking: CommentRanking
    private readonly _createdDate: CommentCreatedDate
    private readonly _updatedDate: CommentUpdatedDate

    constructor(commentArgs: CommentArgs) {
        super()
        this._id = commentArgs.id
        this._content = commentArgs.content
        this._userId = commentArgs.userId
        this._postId = commentArgs.postId
        this._ranking = commentArgs.ranking
        this._createdDate = commentArgs.createdDate
        this._updatedDate = commentArgs.updatedDate
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

    public static create({ id, content, userId, postId }: CommentCreateArgs): Comment {
        const ranking: CommentRanking = CommentRanking.create()
        const createdDate: CommentCreatedDate = CommentCreatedDate.create()
        const updatedDate: CommentUpdatedDate = CommentUpdatedDate.create()
        const comment: Comment = new Comment({ id, content, userId, postId, ranking, createdDate, updatedDate })

        comment.apply(new CommentCreatedEvent(id.value, content.value, userId.value, postId.value, ranking.value))

        return comment
    }
}
