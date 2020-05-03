import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { PostFinder } from '@forum/post/application/find/post-finder'
import { FindPostQuery } from '@forum/post/application/find/find-post-query'
import { PostResponse } from '@forum/post/application/post.response'
import { PostId } from '@forum/shared/domain/post-id'

@QueryHandler(FindPostQuery)
export class FindPostQueryHandler implements IQueryHandler<FindPostQuery, PostResponse> {
    constructor(private postFinder: PostFinder) {}

    execute(query: FindPostQuery): Promise<PostResponse> {
        const id: PostId = new PostId(query.id)

        return this.postFinder.find(id)
    }
}
