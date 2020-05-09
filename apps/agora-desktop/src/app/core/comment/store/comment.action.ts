import { CommentResponse } from '@shared/models/comment/comment.response'
import { Pagination } from '@shared/models/pagination/pagination'

const KEY_STATE = '[Comment]'

export class LoadInitCommentsByPostId {
    static type = `${KEY_STATE} Load Init Comments By Post Id`

    constructor(public postId: string) {}
}

export class LoadComments {
    static type = `${KEY_STATE} Load Comments`
}

export class LoadCommentsNextPage {
    static type = `${KEY_STATE} Load Comments Next Page`
}

export class CommentsLoaded {
    static type = `${KEY_STATE} Comments Loaded`

    constructor(public pagination: Pagination<CommentResponse>) {}
}

export class CreateComment {
    static type = `${KEY_STATE} Create Comment`

    constructor(public content: string) {}
}

export class CommentCreated {
    static type = `${KEY_STATE} Comment Created`
}
