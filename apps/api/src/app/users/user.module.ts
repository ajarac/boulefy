import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { PassportModule } from '@nestjs/passport'
import { UserRepository } from './domain/user.repository'

import { UserTokenGenerator } from './domain/user-token.generator'

import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from './application'
import { CONTROLLERS } from './infrastructure/controller'
import { PASSPORT } from './infrastructure/passport'
import { UserSchema } from './infrastructure/persistence/mongo/user.schema'
import { MongoUserRepository } from './infrastructure/persistence/mongo/mongo-user.repository'
import { JwtUserTokenGenerator } from './infrastructure/passport/jwt/jwt-user-token.generator'
import { jwtConstants } from './infrastructure/passport/constants'
import { UserValidateToken } from './domain/user-validate-token'
import { JwtValidateToken } from './infrastructure/passport/jwt/jwt-validate-token'

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
    controllers: [...CONTROLLERS],
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
        },
        {
            provide: UserValidateToken,
            useClass: JwtValidateToken
        }
    ]
})
export class UserModule {}
