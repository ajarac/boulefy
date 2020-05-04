import { MongoFindPostQuery } from '@api/post/infrastructure/persistence/mongo/queries/mongo-find-post.query'
import { PostFinder } from '@api/post/application/find/post-finder'

export const QUERIES = [
    {
        provide: PostFinder,
        useClass: MongoFindPostQuery
    }
]
