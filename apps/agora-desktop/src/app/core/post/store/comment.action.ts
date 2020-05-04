import { CommentResponse } from '@shared/models/comment/comment.response'


const KEY_STATE = '[Comment]'

export class LoadCommentsByPostId {
    static type = `${KEY_STATE} Load Comments By PostId`

    constructor(public postId: string) {}
}

export class CommentsByPostIdLoaded {
    static type = `${KEY_STATE} Comments By PostId Loaded`

    constructor(public comments: CommentResponse[]) {}
}

export class CreateComment {
    static type = `${KEY_STATE} Create Comment`

    constructor(public content: string) {}
}

export class CommentCreated {
    static type = `${KEY_STATE} Comment Created`

    constructor(public id: string) {}
}
