import { WordMother } from '@backend/stared/test/domain/word.mother';
import { PostTitle } from '@backend/forum/post/domain';

export class PostTitleMother {
    static create(value: string): PostTitle {
        return new PostTitle(value);
    }

    static random(): PostTitle {
        return PostTitleMother.create(WordMother.random());
    }
}
