import { Controller, Get } from '@nestjs/common'
import { QueryBus } from '@nestjs/cqrs'
import { UserResponse } from '@users/users/application/user.response'
import { FindUserQuery } from '@users/users/application/find-user/find-user-query'

@Controller()
export class FindUserController {
    constructor(private queryBus: QueryBus) {}

    @Get(':id')
    findUser(id: string): Promise<UserResponse> {
        return this.queryBus.execute(new FindUserQuery(id))
    }
}
