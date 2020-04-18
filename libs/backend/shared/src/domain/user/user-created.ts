export class UserCreated {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly counterComments: number,
        public readonly counterPosts: number
    ) {}
}
