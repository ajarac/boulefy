import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { PostFinder } from '@api/post/application/find/post-finder'
import { FindPostQuery } from '@api/post/application/find/find-post-query'
import { PostId } from '@api/shared/domain/post-id'
import { PostResponse } from '@api/post/application/post.response'

@QueryHandler(FindPostQuery)
export class FindPostQueryHandler implements IQueryHandler<FindPostQuery, PostResponse> {
    constructor(private postFinder: PostFinder) {}

    execute(query: FindPostQuery): Promise<PostResponse> {
        const id: PostId = new PostId(query.id)

        return this.postFinder.find(id)
    }
}
