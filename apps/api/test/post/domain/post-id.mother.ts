import { IdentifierMother } from '@backend/shared/test/domain/identifier.mother'
import { PostId } from '@api/shared/domain/post-id'

export class PostIdMother {
    static create(value: string): PostId {
        return new PostId(value)
    }

    static random(): PostId {
        return PostIdMother.create(IdentifierMother.random())
    }
}
