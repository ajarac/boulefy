export interface CommentResponse {
    id: string
    content: string
    user: {
        id: string
        username: string
    }
    postId: string
    ranking: number
    createdDate: Date
    updatedDate: Date
}
