import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { PassportModule } from '@nestjs/passport'
import { UserRepository } from '@users/users/domain/user.repository'

import { UserTokenGenerator } from '@users/users/domain/user-token.generator'

import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from '@users/users/application'
import { CONSTROLLERS } from '@users/users/infrastructure/controller'
import { PASSPORT } from '@users/users/infrastructure/passport'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'
import { MongoUserRepository } from '@users/users/infrastructure/persistence/mongo/mongo-user.repository'
import { JwtUserTokenGenerator } from '@users/users/infrastructure/passport/jwt-user-token.generator'
import { jwtConstants } from '@users/users/infrastructure/passport/constants'

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([UserSchema]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '7d' }
        })
    ],
    controllers: [...CONSTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...QUERY_HANDLERS,
        ...EVENT_HANDLERS,
        ...PASSPORT,
        {
            provide: UserRepository,
            useClass: MongoUserRepository
        },
        {
            provide: UserTokenGenerator,
            useClass: JwtUserTokenGenerator
        }
    ]
})
export class UserModule {}
