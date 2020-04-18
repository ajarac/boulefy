import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { FindUserQuery } from '@users/users/application/find-user/find-user-query'
import { UserFinder } from '@users/users/application/find-user/user-finder'
import { UserResponse } from '@users/users/application/user.response'
import { UserId } from '@backend/shared/domain/user/user-id'

@QueryHandler(FindUserQuery)
export class FindUserQueryHandler implements IQueryHandler<FindUserQuery> {
    constructor(private userFinder: UserFinder) {}

    execute(query: FindUserQuery): Promise<UserResponse> {
        const id: UserId = new UserId(query.id)

        return this.userFinder.find(id)
    }
}
