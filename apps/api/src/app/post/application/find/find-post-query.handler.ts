import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { FindPostQuery } from '@api/post/application/find/find-post-query'
import { PostId } from '@api/shared/domain/post-id'
import { PostResponse } from '@shared/models/post/post.response'
import { PostFinder } from '@api/post/application/find/post-finder'

@QueryHandler(FindPostQuery)
export class FindPostQueryHandler implements IQueryHandler<FindPostQuery, PostResponse> {
    constructor(private findPost: PostFinder) {}

    execute(query: FindPostQuery): Promise<PostResponse> {
        const id: PostId = new PostId(query.id)

        return this.findPost.find(id)
    }
}
