import { Identifier } from '@api/shared/domain/identifier'

export class PostId extends Identifier {
    constructor(value: string) {
        super(value);
    }
}
