import { IdentifierMother } from '@backend/stared/test/domain/identifier.mother';
import { PostId } from '../../src/domain';

export class PostIdMother {
    static create(value: string): PostId {
        return new PostId(value);
    }

    static random(): PostId {
        return PostIdMother.create(IdentifierMother.random());
    }
}
