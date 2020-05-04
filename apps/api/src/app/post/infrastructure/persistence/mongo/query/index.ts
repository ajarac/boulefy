import { MongoPostFinderQuery } from '@api/post/infrastructure/persistence/mongo/query/mongo-post-finder.query'
import { PostFinder } from '@api/post/application/find/post-finder'
import { PostFinderAll } from '@api/post/application/findAll/post-finder-all'
import { MongoPostFinderAllQuery } from '@api/post/infrastructure/persistence/mongo/query/mongo-post-finder-all.query'

export const QUERIES = [
    {
        provide: PostFinder,
        useClass: MongoPostFinderQuery
    },
    {
        provide: PostFinderAll,
        useClass: MongoPostFinderAllQuery
    }
]
