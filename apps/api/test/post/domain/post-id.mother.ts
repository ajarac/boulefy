import { PostId } from '@api/shared/domain/post/post-id'
import { IdentifierMother } from '@api/test/shared/domain/identifier.mother'

export class PostIdMother {
    static create(value: string): PostId {
        return new PostId(value)
    }

    static random(): PostId {
        return PostIdMother.create(IdentifierMother.random())
    }
}
