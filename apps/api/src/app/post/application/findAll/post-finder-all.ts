import { PostResponse } from '@shared/models/post/post.response'
import { Pagination } from '@shared/models/pagination/pagination'

export abstract class PostFinderAll {
    abstract findAll(page: number, limit: number): Promise<Pagination<PostResponse>>
}
