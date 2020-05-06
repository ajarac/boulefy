export interface PostResponse {
    id: string
    title: string
    content: string
    counterComments: number
    ranking: number
    user: {
        id: string
        username: string
    },
    createdDate: Date
    updatedDate: Date
}
