import { Controller, Get, Param } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { UserResponse } from '@shared/models/user/user.response'
import { FindUserQuery } from '@api/users/application/find-user/find-user-query'

@Controller('users')
export class FindUserController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    findUser(@Param('id') id: string): Promise<UserResponse> {
        return this.queryBus.execute(new FindUserQuery(id))
    }
}
