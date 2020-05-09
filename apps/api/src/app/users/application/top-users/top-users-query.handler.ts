import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { TopUsersQuery } from '@api/users/application/top-users/top-users-query'
import { FindTopUsers } from '@api/users/application/top-users/find-top-users'
import { UserResponse } from '@shared/models/user/user.response'

@QueryHandler(TopUsersQuery)
export class TopUsersQueryHandler implements IQueryHandler<TopUsersQuery> {
    constructor(private findTopUsers: FindTopUsers) {}

    execute(): Promise<UserResponse[]> {
        return this.findTopUsers.find()
    }
}
