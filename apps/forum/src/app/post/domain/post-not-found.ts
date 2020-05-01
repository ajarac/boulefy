import { PostId } from '@forum/shared/domain/post-id';

export class PostNotFound extends Error {
    constructor(id: PostId) {
        super(`Post with id: ${id.value} not found`);
    }
}
