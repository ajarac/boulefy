export class CreateGroupCommand {
    constructor(public readonly id: string, public readonly name: string, public readonly description: string, readonly userId: string) {}
}
