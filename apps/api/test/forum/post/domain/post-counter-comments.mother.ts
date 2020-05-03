import { NumberMother } from '@backend/shared/test/domain/number.mother'
import { PostCounterComments } from '@api/post/domain/post-counter-comments'


export class PostCounterCommentsMother {
    static create(value: number): PostCounterComments {
        return new PostCounterComments(value)
    }

    static random(): PostCounterComments {
        return PostCounterCommentsMother.create(NumberMother.random())
    }
}
