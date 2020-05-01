import { Entity } from '@agora-desktop/core/shared/models/entity'

export interface Dictionary<T extends Entity> {
    [id: string]: T
}
