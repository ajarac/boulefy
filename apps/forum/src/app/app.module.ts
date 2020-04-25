import { Module } from '@nestjs/common'
import { PostModule } from '@forum/post/post.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MONGO_DB_CONFIG } from '@forum/config/mongo.config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { environment } from '../environments/environment'

@Module({
    imports: [
        PostModule,
        TypeOrmModule.forRoot(MONGO_DB_CONFIG),
        ClientsModule.register([{ name: environment.clientName, transport: Transport.TCP }])
    ],
    providers: []
})
export class AppModule {}
