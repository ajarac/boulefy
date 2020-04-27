import { PostContent } from '@forum/post/domain'
import { WordMother } from '@backend/shared/test/domain/word.mother'

export class PostContentMother {
    static create(value: string): PostContent {
        return new PostContent(value)
    }

    static random(): PostContent {
        return PostContentMother.create(WordMother.random())
    }
}
