import { Post } from '../models/post'

const KEY_STATE = '[POSTS]'

export class LoadPosts {
    static type = `${KEY_STATE} Load Posts`
}

export class PostsLoaded {
    static type = `${KEY_STATE} Posts Loaded`

    constructor(public posts: Post[]) {}
}

export class LoadPostById {
    static type = `${KEY_STATE} Load Post By Id`

    constructor(public id: string) {}
}

export class PostByIdLoaded {
    static type = `${KEY_STATE} Post By Id Loaded`

    constructor(public post: Post) {}
}

export class CreatePost {
    static type = `${KEY_STATE} Create Post`

    constructor(public title: string, public content: string) {}
}

export class PostCreated {
    static type = `${KEY_STATE} Post Created`

    constructor(public id: string) {}
}
