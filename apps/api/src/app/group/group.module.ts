import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GroupSchema } from '@api/group/insfrastructure/mongo/group.schema'
import { APPLICATION_SERVICES, COMMAND_HANDLERS, EVENT_HANDLERS } from '@api/group/application'
import { GroupRepository } from '@api/group/domain/group-repository'
import { MongoGroupRepository } from '@api/group/insfrastructure/mongo/command/mongo-group.repository'
import { SharedModule } from '@api/shared/shared.module'
import { CONTROLLERS } from '@api/group/insfrastructure/controllers'

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([GroupSchema]), SharedModule],
    controllers: [...CONTROLLERS],
    providers: [
        ...APPLICATION_SERVICES,
        ...COMMAND_HANDLERS,
        ...EVENT_HANDLERS,
        { provide: GroupRepository, useClass: MongoGroupRepository }
    ]
})
export class GroupModule {}
