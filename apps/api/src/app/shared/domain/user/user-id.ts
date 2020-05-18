import { Identifier } from '@api/shared/domain/identifier'

export class UserId extends Identifier {
    constructor(id: string) {
        super(id)
    }
}
