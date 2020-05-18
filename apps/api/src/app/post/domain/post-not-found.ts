import { PostId } from '@api/shared/domain/post/post-id'

export class PostNotFound extends Error {
    constructor(id: PostId) {
        super(`Post with id: ${id.value} not found`)
    }
}
