import { Controller, Get } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { UserResponse } from '@shared/models/user/user.response'
import { TopUsersQuery } from '@api/users/application/top-users/top-users-query'

@Controller('top-users')
export class FindTopUserController {
    constructor(private queryBus: QueryBus) {}

    @Get()
    findTopUsers(): Promise<UserResponse[]> {
        const query: TopUsersQuery = new TopUsersQuery()
        return this.queryBus.execute(query)
    }
}
