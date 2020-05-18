export class PostCreatedEvent {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly counterComments: number,
        public readonly ranking: number,
        public readonly userId: string,
        public readonly groupId: string,
        public readonly createdDate: Date
    ) {}
}
