export class CommentCreatedEvent {
    constructor(
        public readonly id: string,
        public readonly content: string,
        public readonly userId: string,
        public readonly postId: string,
        public readonly ranking: number
    ) {}
}
