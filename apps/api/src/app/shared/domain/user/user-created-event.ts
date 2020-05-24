interface UserCreatedEventArgs {
    id: string
    username: string
    email: string
    counterComments: number
    counterPosts: number
    createdDate: Date
}

export class UserCreatedEvent {
    public readonly id: string
    public readonly username: string
    public readonly email: string
    public readonly counterComments: number
    public readonly counterPosts: number
    public readonly createdDate: Date

    constructor(userCreatedEventArgs: UserCreatedEventArgs) {
        this.id = userCreatedEventArgs.id
        this.username = userCreatedEventArgs.username
        this.email = userCreatedEventArgs.email
        this.counterComments = userCreatedEventArgs.counterComments
        this.counterPosts = userCreatedEventArgs.counterPosts
        this.createdDate = userCreatedEventArgs.createdDate
    }
}
