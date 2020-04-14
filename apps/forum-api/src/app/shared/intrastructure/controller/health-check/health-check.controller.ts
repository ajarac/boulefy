import { Controller, Get } from '@nestjs/common'

@Controller('health-check')
export class HealthCheckController {
    @Get()
    getHealthCheck(): Response {
        return { status: 'OK' }
    }
}

interface Response {
    status: string
}
