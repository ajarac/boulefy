import { Module } from '@nestjs/common'
import { FindUserController } from '@api/user/controllers/find-user.controller'
import { RegisterUserController } from '@api/user/controllers/register-user.controller'

@Module({
    controllers: [FindUserController, RegisterUserController]
})
export class UserModule {}
