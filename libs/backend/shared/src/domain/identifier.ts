export abstract class Identifier {
  constructor(protected _value: string) {
  }

  get value(): string {
    return this._value;
  }
}
