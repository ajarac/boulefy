export class RegisterUserEvent {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly password: string,
        public readonly email: string
    ) {}
}
