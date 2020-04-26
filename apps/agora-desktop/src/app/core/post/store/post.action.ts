import { Post } from '../models/post'

const KEY_STATE = '[POSTS]'

export class LoadPosts {
    static type = `${KEY_STATE} Load Posts`
}

export class PostsLoaded {
    static type = `${KEY_STATE} Posts Loaded`

    constructor(public posts: Post[]) {}
}
