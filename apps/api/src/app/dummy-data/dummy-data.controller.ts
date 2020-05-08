import { Controller, Post } from '@nestjs/common'
import { DummyDataService } from '@api/dummy-data/dummy-data.service'

@Controller('dummy')
export class DummyDataController {
    constructor(private service: DummyDataService) {}

    @Post()
    async generate(): Promise<void> {
        return this.service.generate()
    }
}
