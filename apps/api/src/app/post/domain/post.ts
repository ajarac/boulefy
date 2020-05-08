import { AggregateRoot } from '@nestjs/cqrs'

import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post-id'
import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { PostUpdateDate } from '@api/post/domain/post-update-date'

export class Post extends AggregateRoot {
    constructor(
        private _id: PostId,
        private _title: PostTitle,
        private _content: PostContent,
        private _counterComments: PostCounterComments,
        private _ranking: PostRanking,
        private _userId: UserId,
        private _createdDate: PostCreatedDate,
        private _updateDate: PostUpdateDate
    ) {
        super()
    }

    get id(): PostId {
        return this._id
    }

    get title(): PostTitle {
        return this._title
    }

    get content(): PostContent {
        return this._content
    }

    get counterComments(): PostCounterComments {
        return this._counterComments
    }

    get ranking(): PostRanking {
        return this._ranking
    }

    get userId(): UserId {
        return this._userId
    }

    get createdDate(): PostCreatedDate {
        return this._createdDate
    }

    get updateDate(): PostUpdateDate {
        return this._updateDate
    }

    public static create(id: PostId, title: PostTitle, content: PostContent, userId: UserId): Post {
        const counterComments: PostCounterComments = PostCounterComments.create()
        const ranking: PostRanking = PostRanking.create()
        const createdDate: PostCreatedDate = PostCreatedDate.create()
        const updatedDate: PostUpdateDate = PostUpdateDate.create()
        const post: Post = new Post(id, title, content, counterComments, ranking, userId, createdDate, updatedDate)

        post.apply(new PostCreatedEvent(id.value, title.value, counterComments.value, ranking.value, userId.value, createdDate.value))

        return post
    }

    incrementCounterComments(): void {
        this._counterComments = new PostCounterComments(this._counterComments.value + 1)
    }
}
