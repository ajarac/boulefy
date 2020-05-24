import { Injectable } from '@nestjs/common'
import { GroupRepository } from '@api/group/domain/group-repository'
import { EventPublisher } from '@nestjs/cqrs'
import { Group, GroupCreateArgs } from '@api/group/domain/group'

@Injectable()
export class GroupCreator {
    constructor(private repository: GroupRepository, private publisher: EventPublisher) {}

    async create(groupCreateArgs: GroupCreateArgs): Promise<void> {
        const group: Group = this.publisher.mergeObjectContext(Group.create(groupCreateArgs))

        await this.repository.save(group)

        group.commit()
    }
}
