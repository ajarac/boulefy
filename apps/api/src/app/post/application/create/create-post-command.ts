export interface CreatePostCommandArgs {
    id: string
    title: string
    content: string
    userId: string
    groupId: string
}

export class CreatePostCommand {
    public readonly id: string
    public readonly title: string
    public readonly content: string
    public readonly userId: string
    public readonly groupId: string

    constructor(createPostCommandArgs: CreatePostCommandArgs) {
        this.id = createPostCommandArgs.id
        this.title = createPostCommandArgs.title
        this.content = createPostCommandArgs.content
        this.userId = createPostCommandArgs.userId
        this.groupId = createPostCommandArgs.groupId
    }
}
