import { Controller, Get, Request, UseGuards } from '@nestjs/common'
import { UserResponse } from '@shared/models/user/user.response'
import { JwtAthGuard } from '@api/users/infrastructure/passport/jwt/jwt-ath.guard'
import { QueryBus } from '@nestjs/cqrs'
import { FindUserQuery } from '@api/users/application/find-user/find-user-query'

@Controller('profile')
export class ProfileController {
    constructor(private queryBus: QueryBus) {}

    @UseGuards(JwtAthGuard)
    @Get()
    profile(@Request() request): Promise<UserResponse> {
        const { id } = request.user
        return this.queryBus.execute(new FindUserQuery(id))
    }
}
