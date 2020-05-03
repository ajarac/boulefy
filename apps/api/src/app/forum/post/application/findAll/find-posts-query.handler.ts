import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'

import { FindPostsQuery } from './find-posts-query'
import { PostResponse } from '../post.response'
import { PostFinderAll } from './post-finder-all'

@QueryHandler(FindPostsQuery)
export class FindPostsQueryHandler implements IQueryHandler<FindPostsQuery, Array<PostResponse>> {
    constructor(private postFinder: PostFinderAll) {}

    async execute(): Promise<Array<PostResponse>> {
        return this.postFinder.findAll()
    }
}
