interface PostCreatedEventArgs {
    id: string
    title: string
    counterComments: number
    ranking: number
    userId: string
    groupId: string
    createdDate: Date
}

export class PostCreatedEvent {
    public readonly id: string
    public readonly title: string
    public readonly counterComments: number
    public readonly ranking: number
    public readonly userId: string
    public readonly groupId: string
    public readonly createdDate: Date

    constructor(postCreatedEventArgs: PostCreatedEventArgs) {
        this.id = postCreatedEventArgs.id
        this.title = postCreatedEventArgs.title
        this.counterComments = postCreatedEventArgs.counterComments
        this.ranking = postCreatedEventArgs.ranking
        this.userId = postCreatedEventArgs.userId
        this.groupId = postCreatedEventArgs.groupId
        this.createdDate = postCreatedEventArgs.createdDate
    }
}
