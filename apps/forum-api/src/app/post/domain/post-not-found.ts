import { PostId } from '@forum-api/post/domain/post-id';

export class PostNotFound extends Error {
    constructor(id: PostId) {
        super(`Post with id: ${id.value} not found`);
    }
}
