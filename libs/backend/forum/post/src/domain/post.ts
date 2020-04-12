import { AggregateRoot } from '@nestjs/cqrs';


import { PostCreatedDomainEvent } from '@backend/stared/src/domain/post/post-created-domain-event';
import { PostCounterMessages } from '@backend/forum/post/src/domain/post-counter-messages';
import { PostTitle } from '@backend/forum/post/src/domain/post-title';
import { PostRanking } from '@backend/forum/post/src/domain/post-ranking';
import { PostId } from '@backend/forum/post/src/domain/post-id';

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

        post.apply(new PostCreatedDomainEvent(id.value, title.value, counterMessages.value, ranking.value));

        return post;
    }
}
