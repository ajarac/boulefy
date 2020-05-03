/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { AppModule } from './app/app.module'

const logger = new Logger()

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = process.env.port || 3333
    const prefix = '/api'
    app.setGlobalPrefix(prefix)
    app.enableCors()

    await app.listen(port, () => {
        logger.log('Forum Service Listening at http://localhost:' + port + prefix)
    })
}

bootstrap()
