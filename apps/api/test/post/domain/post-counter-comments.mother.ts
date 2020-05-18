import { PostCounterComments } from '@api/post/domain/post-counter-comments'
import { NumberMother } from '@api/test/shared/domain/number.mother'

export class PostCounterCommentsMother {
    static create(value: number): PostCounterComments {
        return new PostCounterComments(value)
    }

    static random(): PostCounterComments {
        return PostCounterCommentsMother.create(NumberMother.random())
    }
}
