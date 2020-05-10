import { WordMother } from '@backend/shared/test/domain/word.mother'
import { PostContent } from '@api/post/domain/post-content'

export class PostContentMother {
    static create(value: string): PostContent {
        return new PostContent(value)
    }

    static random(): PostContent {
        return PostContentMother.create(WordMother.random())
    }
}
