import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([GroupS])]
})
export class GroupModule {}
