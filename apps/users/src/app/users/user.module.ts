import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from '@users/users/application'
import { UserRepository } from '@users/users/domain/user.repository'
import { MongoUserRepository } from '@users/users/infrastructure/persistence/mongo/mongo-user.repository'
import { CONSTROLLERS } from '@users/users/infrastructure/controller'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([UserSchema])],
    controllers: [...CONSTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...EVENT_HANDLERS,
        {
            provide: UserRepository,
            useClass: MongoUserRepository
        }
    ]
})
export class UserModule {}
