import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'

import { PassportModule } from '@nestjs/passport'
import { jwtConstants } from '@api/users/infrastructure/passport/constants'
import { UserValidateToken } from '@api/users/domain/user-validate-token'
import { UserTokenGenerator } from '@api/users/domain/user-token.generator'
import { UserSchema } from '@api/users/infrastructure/persistence/mongo/user.schema'
import { UserRepository } from '@api/users/domain/user.repository'
import { JwtValidateToken } from '@api/users/infrastructure/passport/jwt/jwt-validate-token'
import { PASSPORT } from '@api/users/infrastructure/passport'
import { MongoUserRepository } from '@api/users/infrastructure/persistence/mongo/mongo-user.repository'
import { JwtUserTokenGenerator } from '@api/users/infrastructure/passport/jwt/jwt-user-token.generator'
import { CONTROLLERS } from '@api/users/infrastructure/controller'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS, QUERY_HANDLERS } from '@api/users/application'

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
