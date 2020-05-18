import { Injectable } from '@nestjs/common'
import { GroupRepository } from '@api/group/domain/group-repository'
import { Group } from '@api/group/domain/group'
import { InjectRepository } from '@nestjs/typeorm'
import { GroupSchema } from '@api/group/insfrastructure/mongo/group.schema'
import { Repository } from 'typeorm'
import { GroupMapper } from '@api/group/insfrastructure/mongo/command/group.mapper'

@Injectable()
export class MongoGroupRepository extends GroupRepository {
    constructor(@InjectRepository(GroupSchema) private repository: Repository<GroupSchema>) {
        super()
    }

    async save(group: Group): Promise<void> {
        const schema: GroupSchema = GroupMapper.toSchema(group)
        await this.repository.save(schema)
    }
}
