import { Entity } from './entity'

export interface Dictionary<T extends Entity> {
    [id: string]: T
}
