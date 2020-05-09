import { UserFinder } from '@api/users/application/find-user/user-finder'
import { MongoUserFinderQuery } from '@api/users/infrastructure/persistence/mongo/query/mongo-user-finder.query'
import { FindTopUsers } from '@api/users/application/top-users/find-top-users'
import { MongoFindTopUsers } from '@api/users/infrastructure/persistence/mongo/query/mongo-find-top-users'

export const QUERIES = [
    {
        provide: UserFinder,
        useClass: MongoUserFinderQuery
    },
    {
        provide: FindTopUsers,
        useClass: MongoFindTopUsers
    }
]
