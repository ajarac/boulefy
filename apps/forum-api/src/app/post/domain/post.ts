import { AggregateRoot } from '@nestjs/cqrs'

import { PostCreated } from '@backend/shared/domain/post/post-created'
import { PostCounterComments } from '@forum-api/post/domain/post-counter-comments'
import { PostTitle } from '@forum-api/post/domain/post-title'
import { PostRanking } from '@forum-api/post/domain/post-ranking'
import { PostId } from '@forum-api/post/domain/post-id'

export class Post extends AggregateRoot {
    constructor(
        private _id: PostId,
        private _title: PostTitle,
        private _counterComments: PostCounterComments,
        private _ranking: PostRanking
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

    public static create(id: PostId, title: PostTitle, counterComments: PostCounterComments, ranking: PostRanking): Post {
        const post: Post = new Post(id, title, counterComments, ranking)

        post.apply(new PostCreated(id.value, title.value, counterComments.value, ranking.value))

        return post
    }
}
