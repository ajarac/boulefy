import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { FindPostsQuery } from '@api/post/application/findAll/find-posts-query'
import { PostFinderAll } from '@api/post/application/findAll/post-finder-all'
import { PostResponse } from '@shared/models/post/post.response'

@QueryHandler(FindPostsQuery)
export class FindPostsQueryHandler implements IQueryHandler<FindPostsQuery, Array<PostResponse>> {
    constructor(private postFinder: PostFinderAll) {}

    async execute({ page, limit }: FindPostsQuery): Promise<Array<PostResponse>> {
        return this.postFinder.findAll(page, limit)
    }
}
