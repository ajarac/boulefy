import { FindPostQuery } from '@forum/../../../../../src/forum/post/application/find/find-post-query'
import { PostIdMother } from '@forum/test/forum/post/domain/post-id.mother'
import { PostId } from '@forum/../../../../../src/forum/shared/domain/post-id'

export class FindPostQueryMother {
    static create(id: PostId): FindPostQuery {
        return new FindPostQuery(id.value)
    }

    static random(): FindPostQuery {
        return FindPostQueryMother.create(PostIdMother.random())
    }
}
