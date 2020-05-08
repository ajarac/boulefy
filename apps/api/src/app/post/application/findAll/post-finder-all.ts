import { PostResponse } from '@shared/models/post/post.response'

export abstract class PostFinderAll {
    abstract findAll(page: number, limit: number): Promise<Array<PostResponse>>
}
