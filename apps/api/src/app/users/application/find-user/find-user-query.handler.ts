import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { UserResponse } from '@shared/models/user/user.response'
import { UserId } from '@api/shared/domain/user/user-id'
import { UserFinder } from '@api/users/application/find-user/user-finder'
import { FindUserQuery } from '@api/users/application/find-user/find-user-query'

@QueryHandler(FindUserQuery)
export class FindUserQueryHandler implements IQueryHandler<FindUserQuery> {
    constructor(private userFinder: UserFinder) {}

    execute(query: FindUserQuery): Promise<UserResponse> {
        const id: UserId = new UserId(query.id)

        return this.userFinder.find(id)
    }
}
