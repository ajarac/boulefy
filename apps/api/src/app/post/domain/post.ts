import { AggregateRoot } from '@nestjs/cqrs'

import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { PostContent } from '@api/post/domain/post-content'
import { PostTitle } from '@api/post/domain/post-title'
import { PostRanking } from '@api/post/domain/post-ranking'
import { PostId } from '@api/shared/domain/post/post-id'
import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { PostUpdateDate } from '@api/post/domain/post-update-date'
import { UserId } from '@api/shared/domain/user/user-id'
import { PostCreatedEvent } from '@api/shared/domain/post/post-created-event'
import { GroupId } from '@api/shared/domain/group/group-id'

interface PostCreateArgs {
    id: PostId
    title: PostTitle
    content: PostContent
    userId: UserId
    groupId: GroupId
}

export interface PostArgs {
    id: PostId
    title: PostTitle
    content: PostContent
    counterComments: PostCounterComments
    ranking: PostRanking
    userId: UserId
    groupId: GroupId
    createdDate: PostCreatedDate
    updatedDate: PostUpdateDate
}

export class Post extends AggregateRoot {
    private readonly _id: PostId
    private readonly _title: PostTitle
    private readonly _content: PostContent
    private _counterComments: PostCounterComments
    private readonly _ranking: PostRanking
    private readonly _userId: UserId
    private readonly _groupId: GroupId
    private readonly _createdDate: PostCreatedDate
    private readonly _updatedDate: PostUpdateDate

    constructor(postArgs: PostArgs) {
        super()
        this._id = postArgs.id
        this._title = postArgs.title
        this._content = postArgs.content
        this._counterComments = postArgs.counterComments
        this._ranking = postArgs.ranking
        this._userId = postArgs.userId
        this._groupId = postArgs.groupId
        this._createdDate = postArgs.createdDate
        this._updatedDate = postArgs.updatedDate
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

    get groupId(): GroupId {
        return this._groupId
    }

    get userId(): UserId {
        return this._userId
    }

    get createdDate(): PostCreatedDate {
        return this._createdDate
    }

    get updatedDate(): PostUpdateDate {
        return this._updatedDate
    }

    public static create({ id, title, content, userId, groupId }: PostCreateArgs): Post {
        const counterComments: PostCounterComments = PostCounterComments.create()
        const ranking: PostRanking = PostRanking.create()
        const createdDate: PostCreatedDate = PostCreatedDate.create()
        const updatedDate: PostUpdateDate = PostUpdateDate.create()
        const post: Post = new Post({ id, title, content, counterComments, ranking, userId, groupId, createdDate, updatedDate })

        post.apply(
            new PostCreatedEvent({
                id: id.value,
                title: title.value,
                counterComments: counterComments.value,
                ranking: ranking.value,
                userId: userId.value,
                groupId: groupId.value,
                createdDate: createdDate.value
            })
        )

        return post
    }

    incrementCounterComments(): void {
        this._counterComments = new PostCounterComments(this._counterComments.value + 1)
    }
}
