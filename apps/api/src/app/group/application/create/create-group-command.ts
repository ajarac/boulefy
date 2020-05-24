interface CreateGroupCommandArgs {
    id: string
    name: string
    description: string
    userId: string
}

export class CreateGroupCommand {
    public readonly id: string
    public readonly name: string
    public readonly description: string
    public readonly userId: string

    constructor(createGroupCommandArgs: CreateGroupCommandArgs) {
        this.id = createGroupCommandArgs.id
        this.name = createGroupCommandArgs.name
        this.description = createGroupCommandArgs.description
        this.userId = createGroupCommandArgs.userId
    }
}
