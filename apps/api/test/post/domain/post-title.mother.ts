import { WordMother } from '@backend/shared/test/domain/word.mother'
import { PostTitle } from '@api/post/domain/post-title'

export class PostTitleMother {
    static create(value: string): PostTitle {
        return new PostTitle(value)
    }

    static random(): PostTitle {
        return PostTitleMother.create(WordMother.random())
    }
}
