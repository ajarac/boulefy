import { AggregateRoot } from '@nestjs/cqrs'

import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { PostCounterComments } from '@forum-api/post/domain/post-counter-comments'
import { PostTitle } from '@forum-api/post/domain/post-title'
import { PostRanking } from '@forum-api/post/domain/post-ranking'
import { PostId } from '@forum-api/post/domain/post-id'
import { UserId } from '@backend/shared/domain/user/user-id'

export class Post extends AggregateRoot {
    constructor(
        private _id: PostId,
        private _title: PostTitle,
        private _counterComments: PostCounterComments,
        private _ranking: PostRanking,
        private _userId: UserId
    ) {
        super()
    }

    get id(): PostId {
        return this._id
    }

    get title(): PostTitle {
        return this._title
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

    public static create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking, userId: UserId): Post {
        const post: Post = new Post(id, title, counterComments, ranking, userId)

        post.apply(new PostCreatedEvent(id.value, title.value, counterComments.value, ranking.value, userId.value))

        return post
    }
}
