interface GroupCreateEventArgs {
    id: string
    name: string
    description: string
    counterPosts: number
    counterUsers: number
    createdDate: Date
}

export class GroupCreatedEvent {
    public readonly id: string
    public readonly name: string
    public readonly description: string
    public readonly counterPosts: number
    public readonly counterUsers: number
    public readonly createdDate: Date

    constructor(groupCreateEventArgs: GroupCreateEventArgs) {
        this.id = groupCreateEventArgs.id
        this.name = groupCreateEventArgs.name
        this.description = groupCreateEventArgs.description
        this.counterPosts = groupCreateEventArgs.counterPosts
        this.counterUsers = groupCreateEventArgs.counterUsers
        this.createdDate = groupCreateEventArgs.createdDate
    }
}
