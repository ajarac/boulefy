import { AggregateRoot } from '@nestjs/cqrs'

import { PostCreatedEvent } from '@backend/shared/domain/post/post-created-event'
import { UserId } from '@backend/shared/domain/user/user-id'
import { PostUser } from '@api/forum/post/domain/post-user'
import { PostCounterComments } from '@api/forum/post/domain/post-counter-comments'
import { PostContent } from '@api/forum/post/domain/post-content'
import { PostTitle } from '@api/forum/post/domain/post-title'
import { PostRanking } from '@api/forum/post/domain/post-ranking'
import { PostId } from '@api/forum/shared/domain/post-id'

export class Post extends AggregateRoot {
    constructor(
        private _id: PostId,
        private _title: PostTitle,
        private _content: PostContent,
        private _counterComments: PostCounterComments,
        private _ranking: PostRanking,
        private _user: PostUser
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

    get user(): PostUser {
        return this._user
    }

    incrementCounterComments(): void {
        this._counterComments = new PostCounterComments(this._counterComments.value + 1)
    }

    public static create(
        id: PostId,
        title: PostTitle,
        content: PostContent,
        counterComments: PostCounterComments,
        ranking: PostRanking,
        user: PostUser
    ): Post {
        const post: Post = new Post(id, title, content, counterComments, ranking, user)

        post.apply(new PostCreatedEvent(id.value, title.value, counterComments.value, ranking.value, user.userId.value))

        return post
    }
}
