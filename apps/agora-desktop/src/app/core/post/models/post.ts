import { Entity } from '../../shared/models/entity'

export interface Post extends Entity {
    title: string
    content: string
    counterComments: number
    ranking: number
    userId: string
}
