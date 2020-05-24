import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { GroupRepository } from '@api/group/domain/group-repository'
import { Group } from '@api/group/domain/group'
import { GroupSchema } from '@api/group/insfrastructure/mongo/group.schema'
import { GroupMapper } from '@api/group/insfrastructure/mongo/command/group.mapper'
import { GroupId } from '@api/shared/domain/group/group-id'
import { from } from 'uuid-mongodb'

@Injectable()
export class MongoGroupRepository extends GroupRepository {
    constructor(@InjectRepository(GroupSchema) private repository: Repository<GroupSchema>) {
        super()
    }

    async save(group: Group): Promise<void> {
        const schema: GroupSchema = GroupMapper.toSchema(group)
        await this.repository.save(schema)
    }

    async search(groupId: GroupId): Promise<Group> {
        const schema: GroupSchema = await this.repository.findOne({ _id: from(groupId.value) })
        return schema ? GroupMapper.fromSchema(schema) : null
    }
}
