export class CreatePostCommand {

  constructor(
    private _id: string,
    private _title: string,
    private _counterMessages: number,
    private _ranking: number,
  ) {
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get counterMessages(): number {
    return this._counterMessages;
  }

  get ranking(): number {
    return this._ranking;
  }
}
