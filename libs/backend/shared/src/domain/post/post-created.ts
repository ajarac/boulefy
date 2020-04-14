export class PostCreated {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly counterComments: number,
        public readonly ranking: number
    ) {}
}
