import { PostResponse } from '@shared/models/post/post.response'
import { PostId } from '@api/shared/domain/post-id'

export abstract class PostFinder {
    abstract find(id: PostId): Promise<PostResponse>
}
