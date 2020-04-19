import { PostId } from '@forum/post/domain'
import { FindPostQuery } from '@forum/post/application/find/find-post-query'
import { PostIdMother } from '@forum/test/post/domain'

export class FindPostQueryMother {
    static create(id: PostId): FindPostQuery {
        return new FindPostQuery(id.value)
    }

    static random(): FindPostQuery {
        return FindPostQueryMother.create(PostIdMother.random())
    }
}
