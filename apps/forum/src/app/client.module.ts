import { Global, Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { environment } from '../environments/environment'

@Global()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: environment.clientName,
                transport: Transport.REDIS,
                options: {
                    url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`
                }
            }
        ])
    ],
    exports: [ClientsModule]
})
export class ClientModule {}
