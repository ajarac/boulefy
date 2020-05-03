import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { PassportModule } from '@nestjs/passport'
import { UserRepository } from '@users/users/domain/user.repository'

import { UserTokenGenerator } from '@users/users/domain/user-token.generator'

import { APPLICATION_SERVICES, COMMAND_HANDLERS, QUERY_HANDLERS } from '@users/users/application'
import { CONTROLLERS } from '@users/users/infrastructure/controller'
import { PASSPORT } from '@users/users/infrastructure/passport'
import { UserSchema } from '@users/users/infrastructure/persistence/mongo/user.schema'
import { MongoUserRepository } from '@users/users/infrastructure/persistence/mongo/mongo-user.repository'
import { JwtUserTokenGenerator } from '@users/users/infrastructure/passport/jwt/jwt-user-token.generator'
import { jwtConstants } from '@users/users/infrastructure/passport/constants'
import { UserValidateToken } from '@users/users/domain/user-validate-token'
import { JwtValidateToken } from '@users/users/infrastructure/passport/jwt/jwt-validate-token'

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
