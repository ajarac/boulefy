import { PostCounterComments } from '@forum/post/domain'
import { NumberMother } from '@backend/shared/test/domain/number.mother'

export class PostCounterCommentsMother {
    static create(value: number): PostCounterComments {
        return new PostCounterComments(value)
    }

    static random(): PostCounterComments {
        return PostCounterCommentsMother.create(NumberMother.random())
    }
}
