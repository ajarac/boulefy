import { Entity } from '@agora-desktop/core/shared/models/entity'

export interface Comment extends Entity {
    content: string
    userId: string
    postId: string
    ranking: number
}
