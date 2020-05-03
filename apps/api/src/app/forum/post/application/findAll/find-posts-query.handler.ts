import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { FindPostsQuery } from '@api/forum/post/application/findAll/find-posts-query'
import { PostResponse } from '@api/forum/post/application/post.response'
import { PostFinderAll } from '@api/forum/post/application/findAll/post-finder-all'

@QueryHandler(FindPostsQuery)
export class FindPostsQueryHandler implements IQueryHandler<FindPostsQuery, Array<PostResponse>> {
    constructor(private postFinder: PostFinderAll) {}

    async execute(): Promise<Array<PostResponse>> {
        return this.postFinder.findAll()
    }
}
