import { isUuid } from 'uuidv4'
import { IdentifierNotValid } from '@api/shared/domain/identifier-not-valid'
import { ValueObject } from '@api/shared/domain/value-object'

export abstract class Identifier extends ValueObject<string> {
    protected constructor(protected _value: string) {
        super(_value)
        this.isValid(_value)
    }

    protected isValid(value: string): void {
        const isValid: boolean = isUuid(value)
        if (!isValid) {
            throw new IdentifierNotValid(`Identifier not valid ${this._value}`)
        }
    }
}
