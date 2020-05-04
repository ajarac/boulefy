import { PostId } from '@api/shared/domain/post-id'
import { PostResponse } from '@shared/models/post/post.response'

export abstract class PostFinder {
    abstract find(id: PostId): Promise<PostResponse>
}
