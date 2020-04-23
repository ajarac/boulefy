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
    const prefix = '/api/users'
    app.setGlobalPrefix(prefix)
    const port = parseInt(process.env.port || '3333')

    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.REDIS,
        options: {
            url: process.env.REDIS_HOST || 'redis://localhost:6379'
        }
    })

    await app.startAllMicroservicesAsync()
    await app.listen(port, () => {
        logger.log('Users Service Listening at http://localhost:' + port + prefix)
    })
}

bootstrap()
