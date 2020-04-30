export class RegisterUserCommand {
    constructor(
        public readonly id: string,
        public readonly username: string,
        public readonly password: string,
        public readonly email: string
    ) {}
}
