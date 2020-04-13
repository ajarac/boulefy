import { NumberMother } from '@backend/stared/test/domain/number.mother';
import { PostCounterMessages } from '@backend/forum/post/domain';

export class PostCounterMessagesMother {
    static create(value: number): PostCounterMessages {
        return new PostCounterMessages(value);
    }

    static random(): PostCounterMessages {
        return PostCounterMessagesMother.create(NumberMother.random());
    }
}
