import { PostIdMother } from '@api/test/post/domain/post-id.mother'
import { FindPostQuery } from '@api/post/application/find/find-post-query'
import { PostId } from '@api/shared/domain/post-id'

export class FindPostQueryMother {
    static create(id: PostId): FindPostQuery {
        return new FindPostQuery(id.value)
    }

    static random(): FindPostQuery {
        return FindPostQueryMother.create(PostIdMother.random())
    }
}
