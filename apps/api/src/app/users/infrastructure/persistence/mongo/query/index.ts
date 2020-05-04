import { UserFinder } from '@api/users/application/find-user/user-finder'
import { MongoUserFinderQuery } from '@api/users/infrastructure/persistence/mongo/query/mongo-user-finder.query'

export const QUERIES = [
    {
        provide: UserFinder,
        useClass: MongoUserFinderQuery
    }
]
