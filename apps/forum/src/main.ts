/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { Logger } from '@nestjs/common'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

const logger = new Logger()

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = process.env.port || 3333
    const prefix = '/api/forum'
    app.setGlobalPrefix(prefix)

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.REDIS,
        options: {
            url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`
        }
    })

    await app.startAllMicroservicesAsync()
    await app.listen(port, () => {
        logger.log('Forum Service Listening at http://localhost:' + port + prefix)
    })
}

bootstrap()
