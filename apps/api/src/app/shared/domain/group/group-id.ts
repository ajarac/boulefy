import { Identifier } from '@api/shared/domain/identifier'

export class GroupId extends Identifier {
    constructor(value: string) {
        super(value)
    }
}
