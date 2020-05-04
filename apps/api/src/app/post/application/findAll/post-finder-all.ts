import { PostResponse } from '@shared/models/post/post.response'

export abstract class PostFinderAll {
    abstract findAll(): Promise<Array<PostResponse>>
}
