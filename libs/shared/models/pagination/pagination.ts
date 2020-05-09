import { PageMetadata } from '@shared/models/pagination/page-metadata'

export interface Pagination<T> {
    metadata: PageMetadata
    results: Array<T>
}
