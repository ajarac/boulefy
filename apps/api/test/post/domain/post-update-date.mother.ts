import { PostUpdateDate } from '@api/post/domain/post-update-date'
import { DateMother } from '@backend/shared/test/domain/date.mother'

export class PostUpdateDateMother {
    static create(value: Date): PostUpdateDate {
        return new PostUpdateDate(value)
    }

    static random(): PostUpdateDate {
        return PostUpdateDateMother.create(DateMother.random())
    }
}
