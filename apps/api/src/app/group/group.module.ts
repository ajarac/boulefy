import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GroupSchema } from '@api/group/insfrastructure/mongo/group.schema'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([GroupSchema])]
})
export class GroupModule {}
