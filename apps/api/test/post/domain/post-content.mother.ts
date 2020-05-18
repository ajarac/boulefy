import { PostContent } from '@api/post/domain/post-content'
import { WordMother } from '@api/test/shared/domain/word.mother'

export class PostContentMother {
    static create(value: string): PostContent {
        return new PostContent(value)
    }

    static random(): PostContent {
        return PostContentMother.create(WordMother.random())
    }
}
