import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { PostFinder } from '@api/forum/post/application/find/post-finder'
import { FindPostQuery } from '@api/forum/post/application/find/find-post-query'
import { PostId } from '@api/forum/shared/domain/post-id'
import { PostResponse } from '@api/forum/post/application/post.response'

@QueryHandler(FindPostQuery)
export class FindPostQueryHandler implements IQueryHandler<FindPostQuery, PostResponse> {
    constructor(private postFinder: PostFinder) {}

    execute(query: FindPostQuery): Promise<PostResponse> {
        const id: PostId = new PostId(query.id)

        return this.postFinder.find(id)
    }
}
