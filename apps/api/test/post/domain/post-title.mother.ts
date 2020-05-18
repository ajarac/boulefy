import { PostTitle } from '@api/post/domain/post-title'
import { WordMother } from '@api/test/shared/domain/word.mother'

export class PostTitleMother {
    static create(value: string): PostTitle {
        return new PostTitle(value)
    }

    static random(): PostTitle {
        return PostTitleMother.create(WordMother.random())
    }
}
