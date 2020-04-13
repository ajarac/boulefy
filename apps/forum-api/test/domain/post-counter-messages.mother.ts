import { PostCounterMessages } from '@forum-api/post/domain';
import { NumberMother } from '@backend/shared/test/domain/number.mother';

export class PostCounterMessagesMother {
    static create(value: number): PostCounterMessages {
        return new PostCounterMessages(value);
    }

    static random(): PostCounterMessages {
        return PostCounterMessagesMother.create(NumberMother.random());
    }
}
