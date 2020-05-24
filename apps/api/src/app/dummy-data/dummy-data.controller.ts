import { Controller, Post } from '@nestjs/common'
import { DummyDataService } from '@api/dummy-data/dummy-data.service'

@Controller('dummy')
export class DummyDataController {
    constructor(private service: DummyDataService) {}

    @Post()
    generate(): void {
        this.service.generate().then()
    }
}
