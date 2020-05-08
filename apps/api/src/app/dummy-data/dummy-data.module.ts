import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { DummyDataController } from '@api/dummy-data/dummy-data.controller'
import { DummyDataService } from '@api/dummy-data/dummy-data.service'

@Module({
    imports: [CqrsModule],
    controllers: [DummyDataController],
    providers: [DummyDataService]
})
export class DummyDataModule {}
