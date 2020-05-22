export interface PostUserResponse {
    id: string
    username: string
}

export interface PostResponse {
    id: string
    title: string
    content: string
    counterComments: number
    ranking: number
    user: PostUserResponse
    createdDate: string
    updatedDate: string
}
