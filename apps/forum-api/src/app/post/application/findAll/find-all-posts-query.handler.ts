import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'

import { FindAllPostsQuery } from '@forum-api/post/application/findAll/find-all-posts-query'
import { PostResponse } from '@forum-api/post/application/post.response'
import { PostFinderAll } from '@forum-api/post/application/findAll/post-finder-all'

@QueryHandler(FindAllPostsQuery)
export class FindAllPostsQueryHandler implements IQueryHandler<FindAllPostsQuery, Array<PostResponse>> {
    constructor(private postFinder: PostFinderAll) {}

    async execute(query: FindAllPostsQuery): Promise<Array<PostResponse>> {
        return this.postFinder.findAll()
    }
}
