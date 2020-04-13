import { AggregateRoot } from '@nestjs/cqrs';

import { PostCreated } from '@backend/shared/domain/post/post-created';
import { PostCounterMessages } from '@forum-api/post/domain/post-counter-messages';
import { PostTitle } from '@forum-api/post/domain/post-title';
import { PostRanking } from '@forum-api/post/domain/post-ranking';
import { PostId } from '@forum-api/post/domain/post-id';

export class Post extends AggregateRoot {

    constructor(
        private _id: PostId,
        private _title: PostTitle,
        private _counterMessages: PostCounterMessages,
        private _ranking: PostRanking
    ) {
        super();
    }

    get id(): PostId {
        return this._id;
    }

    get title(): PostTitle {
        return this._title;
    }

    get counterMessages(): PostCounterMessages {
        return this._counterMessages;
    }

    get ranking(): PostRanking {
        return this._ranking;
    }

    public static create(id: PostId, title: PostTitle, counterMessages: PostCounterMessages, ranking: PostRanking): Post {
        const post: Post = new Post(id, title, counterMessages, ranking);

        post.apply(new PostCreated(id.value, title.value, counterMessages.value, ranking.value));

        return post;
    }
}
