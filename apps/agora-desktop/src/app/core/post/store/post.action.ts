import { PostResponse } from '@shared/models/post/post.response'
import { Pagination } from '@shared/models/pagination/pagination'
import { ListQuery } from '@agora-desktop/core/shared/models/list-query'

const KEY_STATE = '[POSTS]'

export class LoadInitPosts {
    static type = `${KEY_STATE} Load Init Posts`
}

export class LoadPosts {
    static type = `${KEY_STATE} Load Posts`

    constructor(public query: ListQuery) {}
}

export class PostsLoaded {
    static type = `${KEY_STATE} Posts Loaded`

    constructor(public pagination: Pagination<PostResponse>) {}
}

export class LoadPostsNextPage {
    static type = `${KEY_STATE} Load Posts Next Page`
}

export class SetPostSearch {
    static type = `${KEY_STATE} Set Post Search`

    constructor(public search: string) {}
}

export class LoadPostById {
    static type = `${KEY_STATE} Load Post By Id`

    constructor(public id: string) {}
}

export class PostByIdLoaded {
    static type = `${KEY_STATE} Post By Id Loaded`

    constructor(public post: PostResponse) {}
}

export class CreatePost {
    static type = `${KEY_STATE} Create Post`

    constructor(public title: string, public content: string) {}
}

export class PostCreated {
    static type = `${KEY_STATE} Post Created`

    constructor(public id: string) {}
}
