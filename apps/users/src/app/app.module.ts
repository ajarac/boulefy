import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from '@users/users/user.module'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { MONGO_DB_CONFIG } from '@users/config/mongo.config'

@Module({
    imports: [
        UserModule,
        ClientsModule.register([
            {
                name: 'USERS_SERVICE',
                transport: Transport.REDIS,
                options: { url: 'redis://localhost:6379' }
            }
        ]),
        TypeOrmModule.forRoot(MONGO_DB_CONFIG)
    ]
})
export class AppModule {}
