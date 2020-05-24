interface CreateCommentCommandArgs {
    id: string
    content: string
    userId: string
    postId: string
}

export class CreateCommentCommand {
    public readonly id: string
    public readonly content: string
    public readonly userId: string
    public readonly postId: string

    constructor(createCommentCommandArgs: CreateCommentCommandArgs) {
        this.id = createCommentCommandArgs.id
        this.content = createCommentCommandArgs.content
        this.userId = createCommentCommandArgs.userId
        this.postId = createCommentCommandArgs.postId
    }
}
