export abstract class DateValueObject {
    protected _value: Date

    protected constructor(_value: string | number) {
        this._value = new Date(_value)
    }

    get value(): Date {
        return this._value
    }
}
