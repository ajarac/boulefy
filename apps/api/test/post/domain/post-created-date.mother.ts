import { PostCreatedDate } from '@api/post/domain/post-created-date'
import { DateMother } from '@backend/shared/test/domain/date.mother'

export class PostCreatedDateMother {
    static create(value: Date): PostCreatedDate {
        return new PostCreatedDate(value)
    }

    static random(): PostCreatedDate {
        return PostCreatedDateMother.create(DateMother.random())
    }
}
