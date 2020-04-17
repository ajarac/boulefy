import { Global, Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { environment } from '../environments/environment'

@Global()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: environment.microservice,
                transport: Transport.REDIS,
                options: { url: 'redis://localhost:6379' }
            }
        ])
    ],
    exports: [ClientsModule]
})
export class ApiClientsModule {}
