interface RegisterUserCommandArgs {
    id: string
    username: string
    password: string
    email: string
}

export class RegisterUserCommand {
    public readonly id: string
    public readonly username: string
    public readonly password: string
    public readonly email: string

    constructor(registerUserCommandArgs: RegisterUserCommandArgs) {
        this.id = registerUserCommandArgs.id
        this.username = registerUserCommandArgs.username
        this.password = registerUserCommandArgs.password
        this.email = registerUserCommandArgs.email
    }
}
