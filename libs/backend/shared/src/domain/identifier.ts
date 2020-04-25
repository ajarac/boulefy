import { isUuid } from 'uuidv4'
import { IdentifierNotValid } from '@backend/shared/domain/identifier-not-valid'

export abstract class Identifier {
    constructor(protected _value: string) {
        this.isValid(_value)
    }

    get value(): string {
        return this._value
    }

    protected isValid(value: string): void {
        const isValid: boolean = isUuid(value)
        if (!isValid) {
            throw new IdentifierNotValid(`Identifier not valid ${this._value}`)
        }
    }
}
