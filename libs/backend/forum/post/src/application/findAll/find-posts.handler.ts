import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindPostsQuery } from '@backend/forum/post/application/findAll/find-posts.query';
import { PostResponse } from '@backend/forum/post/application/post.response';
import { PostFinderAll } from '@backend/forum/post/application/findAll/post-finder-all';

@QueryHandler(FindPostsQuery)
export class FindPostsHandler implements IQueryHandler<FindPostsQuery, Array<PostResponse>> {

    constructor(private postFinder: PostFinderAll) {
    }

    async execute(query: FindPostsQuery): Promise<Array<PostResponse>> {
        return this.postFinder.findAll();
    }

}
