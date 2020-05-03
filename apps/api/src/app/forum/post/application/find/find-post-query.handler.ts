import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { PostFinder } from './post-finder'
import { FindPostQuery } from './find-post-query'
import { PostResponse } from '../post.response'
import { PostId } from '../../../shared/domain/post-id'

@QueryHandler(FindPostQuery)
export class FindPostQueryHandler implements IQueryHandler<FindPostQuery, PostResponse> {
    constructor(private postFinder: PostFinder) {}

    execute(query: FindPostQuery): Promise<PostResponse> {
        const id: PostId = new PostId(query.id)

        return this.postFinder.find(id)
    }
}
