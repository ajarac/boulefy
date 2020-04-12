import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindPostsQuery } from '@backend/forum/post/src/application/findAll/find-posts.query';
import { PostResponse } from '@backend/forum/post/src/application/post.response';
import { PostFinder } from '@backend/forum/post/src/application/findAll/post-finder';

@QueryHandler(FindPostsQuery)
export class FindPostsHandler implements IQueryHandler<FindPostsQuery, Array<PostResponse>> {

    constructor(private postFinder: PostFinder) {
    }

    async execute(query: FindPostsQuery): Promise<Array<PostResponse>> {
        return this.postFinder.find();
    }

}
