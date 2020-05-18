export class GroupCreateEvent {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly counterPosts: number,
        public readonly counterUsers: number,
        public readonly createdDate: Date
    ) {}
}
