import { Identifier } from '@backend/shared/domain/identifier'

export class UserId extends Identifier {
    constructor(id: string) {
        super(id)
    }
}
